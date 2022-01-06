"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutlookItem = void 0;
const entity_1 = require("./entity");
class OutlookItem extends entity_1.Entity {
    /**
     * Instantiates a new outlookItem and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the categories property value. The categories associated with the item
     * @returns a string
     */
    get categories() {
        return this._categories;
    }
    ;
    /**
     * Gets the changeKey property value. Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @returns a string
     */
    get changeKey() {
        return this._changeKey;
    }
    ;
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    get createdDateTime() {
        return this._createdDateTime;
    }
    ;
    /**
     * Gets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([...super.getFieldDeserializers(),
            ["categories", (o, n) => { o.categories = n.getCollectionOfPrimitiveValues(); }],
            ["changeKey", (o, n) => { o.changeKey = n.getStringValue(); }],
            ["createdDateTime", (o, n) => { o.createdDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", (o, n) => { o.lastModifiedDateTime = n.getDateValue(); }],
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
        writer.writeCollectionOfPrimitiveValues("categories", this.categories);
        writer.writeStringValue("changeKey", this.changeKey);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
    }
    ;
    /**
     * Sets the categories property value. The categories associated with the item
     * @param value Value to set for the categories property.
     */
    set categories(value) {
        this._categories = value;
    }
    ;
    /**
     * Sets the changeKey property value. Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @param value Value to set for the changeKey property.
     */
    set changeKey(value) {
        this._changeKey = value;
    }
    ;
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    set createdDateTime(value) {
        this._createdDateTime = value;
    }
    ;
    /**
     * Sets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    set lastModifiedDateTime(value) {
        this._lastModifiedDateTime = value;
    }
    ;
}
exports.OutlookItem = OutlookItem;
//# sourceMappingURL=outlookItem.js.map