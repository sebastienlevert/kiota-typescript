import {
  DateOnly,
  DeserializeMethod,
  Duration,
  Parsable,
  ParseNode,
  TimeOnly,
  toFirstCharacterUpper,
} from "@microsoft/kiota-abstractions";

export class JsonParseNode implements ParseNode {
  /**
   *
   */
  constructor(private readonly _jsonNode: unknown) {}
  public onBeforeAssignFieldValues: ((value: Parsable) => void) | undefined;
  public onAfterAssignFieldValues: ((value: Parsable) => void) | undefined;
  public getStringValue = () => this._jsonNode as string;
  public getChildNode = (identifier: string): ParseNode | undefined =>
    new JsonParseNode((this._jsonNode as any)[identifier]);
  public getBooleanValue = () => this._jsonNode as boolean;
  public getNumberValue = () => this._jsonNode as number;
  public getGuidValue = () => this._jsonNode as string;
  public getDateValue = () => this._jsonNode as Date;
  public getDateOnlyValue = () => DateOnly.parse(this.getStringValue());
  public getTimeOnlyValue = () => TimeOnly.parse(this.getStringValue());
  public getDurationValue = () => Duration.parse(this.getStringValue());
  public getCollectionOfPrimitiveValues = <T>(): T[] | undefined => {
    return (this._jsonNode as unknown[]).map((x) => {
      const currentParseNode = new JsonParseNode(x);
      const typeOfX = typeof x;
      if (typeOfX === "boolean") {
        return currentParseNode.getBooleanValue() as unknown as T;
      } else if (typeOfX === "string") {
        return currentParseNode.getStringValue() as unknown as T;
      } else if (typeOfX === "number") {
        return currentParseNode.getNumberValue() as unknown as T;
      } else if (x instanceof Date) {
        return currentParseNode.getDateValue() as unknown as T;
      } else if (x instanceof DateOnly) {
        return currentParseNode.getDateValue() as unknown as T;
      } else if (x instanceof TimeOnly) {
        return currentParseNode.getDateValue() as unknown as T;
      } else if (x instanceof Duration) {
        return currentParseNode.getDateValue() as unknown as T;
      } else {
        throw new Error(
          `encountered an unknown type during deserialization ${typeof x}`
        );
      }
    });
  };

  public getCollectionOfObjectValues = <T extends Parsable>(
    method: DeserializeMethod<T>
  ): T[] | undefined => {
    return (this._jsonNode as unknown[])
      .map((x) => new JsonParseNode(x))
      .map((x) => x.getObjectValue<T>(method)); // test this
  };

  public getObjectValue = <T extends Parsable>(
    deserializerFunction: DeserializeMethod<T>,
    value: T = {} as T
  ): T => {
    if (this.onBeforeAssignFieldValues) {
      this.onBeforeAssignFieldValues(value);
    }
    this.assignFieldValues(value, deserializerFunction);
    if (this.onAfterAssignFieldValues) {
      this.onAfterAssignFieldValues(value);
    }
    return value;
  };

  private assignFieldValues = <T extends Parsable>(
    model: T,
    deserializerFunction: (model: T) => Record<string, (n: ParseNode) => void>
  ): void => {
    const fields = deserializerFunction(model);

    if (!this._jsonNode) return;
    Object.entries(this._jsonNode as any).forEach(([k, v]) => {
      const deserializer = fields[k];
      if (deserializer) {
        deserializer(new JsonParseNode(v));
      } else {
        (model as Record<string, unknown>)[k] = v;
      }
    });
  };
  public getEnumValues = <T>(type: any): T[] => {
    const rawValues = this.getStringValue();
    if (!rawValues) {
      return [];
    }
    return rawValues.split(",").map((x) => type[toFirstCharacterUpper(x)] as T);
  };
  public getEnumValue = <T>(type: any): T | undefined => {
    const values = this.getEnumValues(type);
    if (values.length > 0) {
      return values[0] as T;
    } else {
      return undefined;
    }
  };
}
