import { Entity } from './entity';
export class Attachment extends Entity {
    /**
     * Instantiates a new attachment and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the contentType property value. The MIME type.
     * @returns a string
     */
    get contentType() {
        return this._contentType;
    }
    ;
    /**
     * Gets the isInline property value. true if the attachment is an inline attachment; otherwise, false.
     * @returns a boolean
     */
    get isInline() {
        return this._isInline;
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
     * Gets the name property value. The attachment's file name.
     * @returns a string
     */
    get name() {
        return this._name;
    }
    ;
    /**
     * Gets the size property value. The length of the attachment in bytes.
     * @returns a integer
     */
    get size() {
        return this._size;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([...super.getFieldDeserializers(),
            ["contentType", (o, n) => { o.contentType = n.getStringValue(); }],
            ["isInline", (o, n) => { o.isInline = n.getBooleanValue(); }],
            ["lastModifiedDateTime", (o, n) => { o.lastModifiedDateTime = n.getDateValue(); }],
            ["name", (o, n) => { o.name = n.getStringValue(); }],
            ["size", (o, n) => { o.size = n.getNumberValue(); }],
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
        writer.writeStringValue("contentType", this.contentType);
        writer.writeBooleanValue("isInline", this.isInline);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("size", this.size);
    }
    ;
    /**
     * Sets the contentType property value. The MIME type.
     * @param value Value to set for the contentType property.
     */
    set contentType(value) {
        this._contentType = value;
    }
    ;
    /**
     * Sets the isInline property value. true if the attachment is an inline attachment; otherwise, false.
     * @param value Value to set for the isInline property.
     */
    set isInline(value) {
        this._isInline = value;
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
    /**
     * Sets the name property value. The attachment's file name.
     * @param value Value to set for the name property.
     */
    set name(value) {
        this._name = value;
    }
    ;
    /**
     * Sets the size property value. The length of the attachment in bytes.
     * @param value Value to set for the size property.
     */
    set size(value) {
        this._size = value;
    }
    ;
}
//# sourceMappingURL=attachment.js.map