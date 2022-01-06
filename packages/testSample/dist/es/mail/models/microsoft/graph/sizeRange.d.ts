import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class SizeRange implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    /** The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.  */
    private _maximumSize?;
    /** The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.  */
    private _minimumSize?;
    /**
     * Instantiates a new sizeRange and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the maximumSize property value. The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
     * @returns a integer
     */
    get maximumSize(): number | undefined;
    /**
     * Gets the minimumSize property value. The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
     * @returns a integer
     */
    get minimumSize(): number | undefined;
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
     * Sets the maximumSize property value. The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
     * @param value Value to set for the maximumSize property.
     */
    set maximumSize(value: number | undefined);
    /**
     * Sets the minimumSize property value. The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
     * @param value Value to set for the minimumSize property.
     */
    set minimumSize(value: number | undefined);
}
//# sourceMappingURL=sizeRange.d.ts.map