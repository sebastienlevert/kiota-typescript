import { EmailAddress } from './emailAddress';
import { Entity } from './entity';
import { InferenceClassificationType } from './inferenceClassificationType';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class InferenceClassificationOverride extends Entity implements Parsable {
    private _classifyAs?;
    private _senderEmailAddress?;
    /**
     * Instantiates a new inferenceClassificationOverride and sets the default values.
     */
    constructor();
    /**
     * Gets the classifyAs property value.
     * @returns a inferenceClassificationType
     */
    get classifyAs(): InferenceClassificationType | undefined;
    /**
     * Gets the senderEmailAddress property value.
     * @returns a emailAddress
     */
    get senderEmailAddress(): EmailAddress | undefined;
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
     * Sets the classifyAs property value.
     * @param value Value to set for the classifyAs property.
     */
    set classifyAs(value: InferenceClassificationType | undefined);
    /**
     * Sets the senderEmailAddress property value.
     * @param value Value to set for the senderEmailAddress property.
     */
    set senderEmailAddress(value: EmailAddress | undefined);
}
//# sourceMappingURL=inferenceClassificationOverride.d.ts.map