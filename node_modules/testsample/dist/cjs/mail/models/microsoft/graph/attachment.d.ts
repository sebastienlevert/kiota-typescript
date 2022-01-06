import { Entity } from './entity';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class Attachment extends Entity implements Parsable {
    /** The MIME type.  */
    private _contentType?;
    /** true if the attachment is an inline attachment; otherwise, false.  */
    private _isInline?;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _lastModifiedDateTime?;
    /** The attachment's file name.  */
    private _name?;
    /** The length of the attachment in bytes.  */
    private _size?;
    /**
     * Instantiates a new attachment and sets the default values.
     */
    constructor();
    /**
     * Gets the contentType property value. The MIME type.
     * @returns a string
     */
    get contentType(): string | undefined;
    /**
     * Gets the isInline property value. true if the attachment is an inline attachment; otherwise, false.
     * @returns a boolean
     */
    get isInline(): boolean | undefined;
    /**
     * Gets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    get lastModifiedDateTime(): Date | undefined;
    /**
     * Gets the name property value. The attachment's file name.
     * @returns a string
     */
    get name(): string | undefined;
    /**
     * Gets the size property value. The length of the attachment in bytes.
     * @returns a integer
     */
    get size(): number | undefined;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers<T>(): Map<string, (item: T, node: ParseNode) => void>;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer: SerializationWriter): void;
    /**
     * Sets the contentType property value. The MIME type.
     * @param value Value to set for the contentType property.
     */
    set contentType(value: string | undefined);
    /**
     * Sets the isInline property value. true if the attachment is an inline attachment; otherwise, false.
     * @param value Value to set for the isInline property.
     */
    set isInline(value: boolean | undefined);
    /**
     * Sets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    set lastModifiedDateTime(value: Date | undefined);
    /**
     * Sets the name property value. The attachment's file name.
     * @param value Value to set for the name property.
     */
    set name(value: string | undefined);
    /**
     * Sets the size property value. The length of the attachment in bytes.
     * @param value Value to set for the size property.
     */
    set size(value: number | undefined);
}
//# sourceMappingURL=attachment.d.ts.map