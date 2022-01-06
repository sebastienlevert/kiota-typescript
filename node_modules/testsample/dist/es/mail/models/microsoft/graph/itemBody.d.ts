import { BodyType } from './bodyType';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class ItemBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    /** The content of the item.  */
    private _content?;
    private _contentType?;
    /**
     * Instantiates a new itemBody and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the content property value. The content of the item.
     * @returns a string
     */
    get content(): string | undefined;
    /**
     * Gets the contentType property value.
     * @returns a bodyType
     */
    get contentType(): BodyType | undefined;
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
     * Sets the content property value. The content of the item.
     * @param value Value to set for the content property.
     */
    set content(value: string | undefined);
    /**
     * Sets the contentType property value.
     * @param value Value to set for the contentType property.
     */
    set contentType(value: BodyType | undefined);
}
//# sourceMappingURL=itemBody.d.ts.map