"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    /**
     * Instantiates a new entity and sets the default values.
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
     * Gets the id property value. Read-only.
     * @returns a string
     */
    get id() {
        return this._id;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["id", (o, n) => { o.id = n.getStringValue(); }],
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
        writer.writeStringValue("id", this.id);
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
     * Sets the id property value. Read-only.
     * @param value Value to set for the id property.
     */
    set id(value) {
        this._id = value;
    }
    ;
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map