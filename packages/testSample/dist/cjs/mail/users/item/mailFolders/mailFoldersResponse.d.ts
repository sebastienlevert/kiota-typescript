import { MailFolder } from '../../../models/microsoft/graph/mailFolder';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class MailFoldersResponse implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    private _nextLink?;
    private _value?;
    /**
     * Instantiates a new mailFoldersResponse and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the @odata.nextLink property value.
     * @returns a string
     */
    get nextLink(): string | undefined;
    /**
     * Gets the value property value.
     * @returns a mailFolder
     */
    get value(): MailFolder[] | undefined;
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
     * Sets the @odata.nextLink property value.
     * @param value Value to set for the nextLink property.
     */
    set nextLink(value: string | undefined);
    /**
     * Sets the value property value.
     * @param value Value to set for the value property.
     */
    set value(value: MailFolder[] | undefined);
}
//# sourceMappingURL=mailFoldersResponse.d.ts.map