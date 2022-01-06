import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class InternetMessageHeader implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    /** Represents the key in a key-value pair.  */
    private _name?;
    /** The value in a key-value pair.  */
    private _value?;
    /**
     * Instantiates a new internetMessageHeader and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the name property value. Represents the key in a key-value pair.
     * @returns a string
     */
    get name(): string | undefined;
    /**
     * Gets the value property value. The value in a key-value pair.
     * @returns a string
     */
    get value(): string | undefined;
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
     * Sets the name property value. Represents the key in a key-value pair.
     * @param value Value to set for the name property.
     */
    set name(value: string | undefined);
    /**
     * Sets the value property value. The value in a key-value pair.
     * @param value Value to set for the value property.
     */
    set value(value: string | undefined);
}
//# sourceMappingURL=internetMessageHeader.d.ts.map