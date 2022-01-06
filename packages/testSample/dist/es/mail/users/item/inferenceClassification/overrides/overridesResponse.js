import { InferenceClassificationOverride } from '../../../../models/microsoft/graph/inferenceClassificationOverride';
export class OverridesResponse {
    /**
     * Instantiates a new overridesResponse and sets the default values.
     */
    constructor() {
        this._additionalData = new Map();
    }
    ;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData() {
        return this._additionalData;
    }
    ;
    /**
     * Gets the @odata.nextLink property value.
     * @returns a string
     */
    get nextLink() {
        return this._nextLink;
    }
    ;
    /**
     * Gets the value property value.
     * @returns a inferenceClassificationOverride
     */
    get value() {
        return this._value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["@odata.nextLink", (o, n) => { o.nextLink = n.getStringValue(); }],
            ["value", (o, n) => { o.value = n.getCollectionOfObjectValues(InferenceClassificationOverride); }],
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
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        writer.writeCollectionOfObjectValues("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    set additionalData(value) {
        this._additionalData = value;
    }
    ;
    /**
     * Sets the @odata.nextLink property value.
     * @param value Value to set for the nextLink property.
     */
    set nextLink(value) {
        this._nextLink = value;
    }
    ;
    /**
     * Sets the value property value.
     * @param value Value to set for the value property.
     */
    set value(value) {
        this._value = value;
    }
    ;
}
//# sourceMappingURL=overridesResponse.js.map