"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeRange = void 0;
class SizeRange {
    /**
     * Instantiates a new sizeRange and sets the default values.
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
     * Gets the maximumSize property value. The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
     * @returns a integer
     */
    get maximumSize() {
        return this._maximumSize;
    }
    ;
    /**
     * Gets the minimumSize property value. The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
     * @returns a integer
     */
    get minimumSize() {
        return this._minimumSize;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["maximumSize", (o, n) => { o.maximumSize = n.getNumberValue(); }],
            ["minimumSize", (o, n) => { o.minimumSize = n.getNumberValue(); }],
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
        writer.writeNumberValue("maximumSize", this.maximumSize);
        writer.writeNumberValue("minimumSize", this.minimumSize);
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
     * Sets the maximumSize property value. The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
     * @param value Value to set for the maximumSize property.
     */
    set maximumSize(value) {
        this._maximumSize = value;
    }
    ;
    /**
     * Sets the minimumSize property value. The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
     * @param value Value to set for the minimumSize property.
     */
    set minimumSize(value) {
        this._minimumSize = value;
    }
    ;
}
exports.SizeRange = SizeRange;
//# sourceMappingURL=sizeRange.js.map