import { EmailAddress } from './emailAddress';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class Recipient implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    private _emailAddress?;
    /**
     * Instantiates a new recipient and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the emailAddress property value.
     * @returns a emailAddress
     */
    get emailAddress(): EmailAddress | undefined;
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
     * Sets the emailAddress property value.
     * @param value Value to set for the emailAddress property.
     */
    set emailAddress(value: EmailAddress | undefined);
}
//# sourceMappingURL=recipient.d.ts.map