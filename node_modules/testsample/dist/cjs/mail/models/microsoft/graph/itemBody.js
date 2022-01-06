"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemBody = void 0;
const bodyType_1 = require("./bodyType");
class ItemBody {
    /**
     * Instantiates a new itemBody and sets the default values.
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
     * Gets the content property value. The content of the item.
     * @returns a string
     */
    get content() {
        return this._content;
    }
    ;
    /**
     * Gets the contentType property value.
     * @returns a bodyType
     */
    get contentType() {
        return this._contentType;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["content", (o, n) => { o.content = n.getStringValue(); }],
            ["contentType", (o, n) => { o.contentType = n.getEnumValue(bodyType_1.BodyType); }],
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
        writer.writeStringValue("content", this.content);
        writer.writeEnumValue("contentType", this.contentType);
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
     * Sets the content property value. The content of the item.
     * @param value Value to set for the content property.
     */
    set content(value) {
        this._content = value;
    }
    ;
    /**
     * Sets the contentType property value.
     * @param value Value to set for the contentType property.
     */
    set contentType(value) {
        this._contentType = value;
    }
    ;
}
exports.ItemBody = ItemBody;
//# sourceMappingURL=itemBody.js.map