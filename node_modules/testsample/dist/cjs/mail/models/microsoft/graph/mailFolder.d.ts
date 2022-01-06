import { Entity } from './entity';
import { Message } from './message';
import { MessageRule } from './messageRule';
import { MultiValueLegacyExtendedProperty } from './multiValueLegacyExtendedProperty';
import { SingleValueLegacyExtendedProperty } from './singleValueLegacyExtendedProperty';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class MailFolder extends Entity implements Parsable {
    /** The number of immediate child mailFolders in the current mailFolder.  */
    private _childFolderCount?;
    /** The collection of child folders in the mailFolder.  */
    private _childFolders?;
    /** The mailFolder's display name.  */
    private _displayName?;
    /** Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.  */
    private _isHidden?;
    /** The collection of rules that apply to the user's Inbox folder.  */
    private _messageRules?;
    /** The collection of messages in the mailFolder.  */
    private _messages?;
    /** The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.  */
    private _multiValueExtendedProperties?;
    /** The unique identifier for the mailFolder's parent mailFolder.  */
    private _parentFolderId?;
    /** The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.  */
    private _singleValueExtendedProperties?;
    /** The number of items in the mailFolder.  */
    private _totalItemCount?;
    /** The number of items in the mailFolder marked as unread.  */
    private _unreadItemCount?;
    /**
     * Instantiates a new mailFolder and sets the default values.
     */
    constructor();
    /**
     * Gets the childFolderCount property value. The number of immediate child mailFolders in the current mailFolder.
     * @returns a integer
     */
    get childFolderCount(): number | undefined;
    /**
     * Gets the childFolders property value. The collection of child folders in the mailFolder.
     * @returns a mailFolder
     */
    get childFolders(): MailFolder[] | undefined;
    /**
     * Gets the displayName property value. The mailFolder's display name.
     * @returns a string
     */
    get displayName(): string | undefined;
    /**
     * Gets the isHidden property value. Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.
     * @returns a boolean
     */
    get isHidden(): boolean | undefined;
    /**
     * Gets the messageRules property value. The collection of rules that apply to the user's Inbox folder.
     * @returns a messageRule
     */
    get messageRules(): MessageRule[] | undefined;
    /**
     * Gets the messages property value. The collection of messages in the mailFolder.
     * @returns a message
     */
    get messages(): Message[] | undefined;
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    get multiValueExtendedProperties(): MultiValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the parentFolderId property value. The unique identifier for the mailFolder's parent mailFolder.
     * @returns a string
     */
    get parentFolderId(): string | undefined;
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    get singleValueExtendedProperties(): SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the totalItemCount property value. The number of items in the mailFolder.
     * @returns a integer
     */
    get totalItemCount(): number | undefined;
    /**
     * Gets the unreadItemCount property value. The number of items in the mailFolder marked as unread.
     * @returns a integer
     */
    get unreadItemCount(): number | undefined;
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
     * Sets the childFolderCount property value. The number of immediate child mailFolders in the current mailFolder.
     * @param value Value to set for the childFolderCount property.
     */
    set childFolderCount(value: number | undefined);
    /**
     * Sets the childFolders property value. The collection of child folders in the mailFolder.
     * @param value Value to set for the childFolders property.
     */
    set childFolders(value: MailFolder[] | undefined);
    /**
     * Sets the displayName property value. The mailFolder's display name.
     * @param value Value to set for the displayName property.
     */
    set displayName(value: string | undefined);
    /**
     * Sets the isHidden property value. Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.
     * @param value Value to set for the isHidden property.
     */
    set isHidden(value: boolean | undefined);
    /**
     * Sets the messageRules property value. The collection of rules that apply to the user's Inbox folder.
     * @param value Value to set for the messageRules property.
     */
    set messageRules(value: MessageRule[] | undefined);
    /**
     * Sets the messages property value. The collection of messages in the mailFolder.
     * @param value Value to set for the messages property.
     */
    set messages(value: Message[] | undefined);
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined);
    /**
     * Sets the parentFolderId property value. The unique identifier for the mailFolder's parent mailFolder.
     * @param value Value to set for the parentFolderId property.
     */
    set parentFolderId(value: string | undefined);
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined);
    /**
     * Sets the totalItemCount property value. The number of items in the mailFolder.
     * @param value Value to set for the totalItemCount property.
     */
    set totalItemCount(value: number | undefined);
    /**
     * Sets the unreadItemCount property value. The number of items in the mailFolder marked as unread.
     * @param value Value to set for the unreadItemCount property.
     */
    set unreadItemCount(value: number | undefined);
}
//# sourceMappingURL=mailFolder.d.ts.map