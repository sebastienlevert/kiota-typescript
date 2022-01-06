"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiValueLegacyExtendedProperty = void 0;
const entity_1 = require("./entity");
class MultiValueLegacyExtendedProperty extends entity_1.Entity {
    /**
     * Instantiates a new multiValueLegacyExtendedProperty and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the value property value. A collection of property values.
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
        return new Map([...super.getFieldDeserializers(),
            ["value", (o, n) => { o.value = n.getCollectionOfPrimitiveValues(); }],
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
        writer.writeCollectionOfPrimitiveValues("value", this.value);
    }
    ;
    /**
     * Sets the value property value. A collection of property values.
     * @param value Value to set for the value property.
     */
    set value(value) {
        this._value = value;
    }
    ;
}
exports.MultiValueLegacyExtendedProperty = MultiValueLegacyExtendedProperty;
//# sourceMappingURL=multiValueLegacyExtendedProperty.js.map