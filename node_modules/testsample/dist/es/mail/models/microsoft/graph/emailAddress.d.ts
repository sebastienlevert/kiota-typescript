import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class EmailAddress implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    /** The email address of the person or entity.  */
    private _address?;
    /** The display name of the person or entity.  */
    private _name?;
    /**
     * Instantiates a new emailAddress and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the address property value. The email address of the person or entity.
     * @returns a string
     */
    get address(): string | undefined;
    /**
     * Gets the name property value. The display name of the person or entity.
     * @returns a string
     */
    get name(): string | undefined;
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
     * Sets the address property value. The email address of the person or entity.
     * @param value Value to set for the address property.
     */
    set address(value: string | undefined);
    /**
     * Sets the name property value. The display name of the person or entity.
     * @param value Value to set for the name property.
     */
    set name(value: string | undefined);
}
//# sourceMappingURL=emailAddress.d.ts.map