"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InferenceClassification = void 0;
const entity_1 = require("./entity");
const inferenceClassificationOverride_1 = require("./inferenceClassificationOverride");
class InferenceClassification extends entity_1.Entity {
    /**
     * Instantiates a new inferenceClassification and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the overrides property value. A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @returns a inferenceClassificationOverride
     */
    get overrides() {
        return this._overrides;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([...super.getFieldDeserializers(),
            ["overrides", (o, n) => { o.overrides = n.getCollectionOfObjectValues(inferenceClassificationOverride_1.InferenceClassificationOverride); }],
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
        writer.writeCollectionOfObjectValues("overrides", this.overrides);
    }
    ;
    /**
     * Sets the overrides property value. A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param value Value to set for the overrides property.
     */
    set overrides(value) {
        this._overrides = value;
    }
    ;
}
exports.InferenceClassification = InferenceClassification;
//# sourceMappingURL=inferenceClassification.js.map