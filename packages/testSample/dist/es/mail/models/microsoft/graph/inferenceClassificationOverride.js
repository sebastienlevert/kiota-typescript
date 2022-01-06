import { EmailAddress } from './emailAddress';
import { Entity } from './entity';
import { InferenceClassificationType } from './inferenceClassificationType';
export class InferenceClassificationOverride extends Entity {
    /**
     * Instantiates a new inferenceClassificationOverride and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the classifyAs property value.
     * @returns a inferenceClassificationType
     */
    get classifyAs() {
        return this._classifyAs;
    }
    ;
    /**
     * Gets the senderEmailAddress property value.
     * @returns a emailAddress
     */
    get senderEmailAddress() {
        return this._senderEmailAddress;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([...super.getFieldDeserializers(),
            ["classifyAs", (o, n) => { o.classifyAs = n.getEnumValue(InferenceClassificationType); }],
            ["senderEmailAddress", (o, n) => { o.senderEmailAddress = n.getObjectValue(EmailAddress); }],
        ]);
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue("classifyAs", this.classifyAs);
        writer.writeObjectValue("senderEmailAddress", this.senderEmailAddress);
    }
    ;
    /**
     * Sets the classifyAs property value.
     * @param value Value to set for the classifyAs property.
     */
    set classifyAs(value) {
        this._classifyAs = value;
    }
    ;
    /**
     * Sets the senderEmailAddress property value.
     * @param value Value to set for the senderEmailAddress property.
     */
    set senderEmailAddress(value) {
        this._senderEmailAddress = value;
    }
    ;
}
//# sourceMappingURL=inferenceClassificationOverride.js.map