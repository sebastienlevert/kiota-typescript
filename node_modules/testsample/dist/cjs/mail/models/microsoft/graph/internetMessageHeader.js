"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternetMessageHeader = void 0;
class InternetMessageHeader {
    /**
     * Instantiates a new internetMessageHeader and sets the default values.
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
     * Gets the name property value. Represents the key in a key-value pair.
     * @returns a string
     */
    get name() {
        return this._name;
    }
    ;
    /**
     * Gets the value property value. The value in a key-value pair.
     * @returns a string
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
            ["name", (o, n) => { o.name = n.getStringValue(); }],
            ["value", (o, n) => { o.value = n.getStringValue(); }],
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
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("value", this.value);
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
     * Sets the name property value. Represents the key in a key-value pair.
     * @param value Value to set for the name property.
     */
    set name(value) {
        this._name = value;
    }
    ;
    /**
     * Sets the value property value. The value in a key-value pair.
     * @param value Value to set for the value property.
     */
    set value(value) {
        this._value = value;
    }
    ;
}
exports.InternetMessageHeader = InternetMessageHeader;
//# sourceMappingURL=internetMessageHeader.js.map