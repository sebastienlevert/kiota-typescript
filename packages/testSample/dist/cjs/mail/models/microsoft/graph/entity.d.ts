import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class Entity implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    /** Read-only.  */
    private _id?;
    /**
     * Instantiates a new entity and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the id property value. Read-only.
     * @returns a string
     */
    get id(): string | undefined;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers<T>(): Map<string, (item: T, node: ParseNode) => void>;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer: SerializationWriter): void;
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    set additionalData(value: Map<string, unknown>);
    /**
     * Sets the id property value. Read-only.
     * @param value Value to set for the id property.
     */
    set id(value: string | undefined);
}
//# sourceMappingURL=entity.d.ts.map