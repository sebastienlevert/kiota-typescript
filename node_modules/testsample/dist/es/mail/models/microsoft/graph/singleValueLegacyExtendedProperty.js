import { Entity } from './entity';
export class SingleValueLegacyExtendedProperty extends Entity {
    /**
     * Instantiates a new singleValueLegacyExtendedProperty and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the value property value. A property value.
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
        super.serialize(writer);
        writer.writeStringValue("value", this.value);
    }
    ;
    /**
     * Sets the value property value. A property value.
     * @param value Value to set for the value property.
     */
    set value(value) {
        this._value = value;
    }
    ;
}
//# sourceMappingURL=singleValueLegacyExtendedProperty.js.map