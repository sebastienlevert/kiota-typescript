"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InferenceClassificationOverride = void 0;
const emailAddress_1 = require("./emailAddress");
const entity_1 = require("./entity");
const inferenceClassificationType_1 = require("./inferenceClassificationType");
class InferenceClassificationOverride extends entity_1.Entity {
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
            ["classifyAs", (o, n) => { o.classifyAs = n.getEnumValue(inferenceClassificationType_1.InferenceClassificationType); }],
            ["senderEmailAddress", (o, n) => { o.senderEmailAddress = n.getObjectValue(emailAddress_1.EmailAddress); }],
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
exports.InferenceClassificationOverride = InferenceClassificationOverride;
//# sourceMappingURL=inferenceClassificationOverride.js.map