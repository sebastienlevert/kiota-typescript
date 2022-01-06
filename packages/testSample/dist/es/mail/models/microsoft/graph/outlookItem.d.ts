import { Entity } from './entity';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class OutlookItem extends Entity implements Parsable {
    /** The categories associated with the item  */
    private _categories?;
    /** Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.  */
    private _changeKey?;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _createdDateTime?;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _lastModifiedDateTime?;
    /**
     * Instantiates a new outlookItem and sets the default values.
     */
    constructor();
    /**
     * Gets the categories property value. The categories associated with the item
     * @returns a string
     */
    get categories(): string[] | undefined;
    /**
     * Gets the changeKey property value. Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @returns a string
     */
    get changeKey(): string | undefined;
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    get createdDateTime(): Date | undefined;
    /**
     * Gets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    get lastModifiedDateTime(): Date | undefined;
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
     * Sets the categories property value. The categories associated with the item
     * @param value Value to set for the categories property.
     */
    set categories(value: string[] | undefined);
    /**
     * Sets the changeKey property value. Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @param value Value to set for the changeKey property.
     */
    set changeKey(value: string | undefined);
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    set createdDateTime(value: Date | undefined);
    /**
     * Sets the lastModifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    set lastModifiedDateTime(value: Date | undefined);
}
//# sourceMappingURL=outlookItem.d.ts.map