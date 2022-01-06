"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailFolder = void 0;
const entity_1 = require("./entity");
const message_1 = require("./message");
const messageRule_1 = require("./messageRule");
const multiValueLegacyExtendedProperty_1 = require("./multiValueLegacyExtendedProperty");
const singleValueLegacyExtendedProperty_1 = require("./singleValueLegacyExtendedProperty");
class MailFolder extends entity_1.Entity {
    /**
     * Instantiates a new mailFolder and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the childFolderCount property value. The number of immediate child mailFolders in the current mailFolder.
     * @returns a integer
     */
    get childFolderCount() {
        return this._childFolderCount;
    }
    ;
    /**
     * Gets the childFolders property value. The collection of child folders in the mailFolder.
     * @returns a mailFolder
     */
    get childFolders() {
        return this._childFolders;
    }
    ;
    /**
     * Gets the displayName property value. The mailFolder's display name.
     * @returns a string
     */
    get displayName() {
        return this._displayName;
    }
    ;
    /**
     * Gets the isHidden property value. Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.
     * @returns a boolean
     */
    get isHidden() {
        return this._isHidden;
    }
    ;
    /**
     * Gets the messageRules property value. The collection of rules that apply to the user's Inbox folder.
     * @returns a messageRule
     */
    get messageRules() {
        return this._messageRules;
    }
    ;
    /**
     * Gets the messages property value. The collection of messages in the mailFolder.
     * @returns a message
     */
    get messages() {
        return this._messages;
    }
    ;
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    }
    ;
    /**
     * Gets the parentFolderId property value. The unique identifier for the mailFolder's parent mailFolder.
     * @returns a string
     */
    get parentFolderId() {
        return this._parentFolderId;
    }
    ;
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    }
    ;
    /**
     * Gets the totalItemCount property value. The number of items in the mailFolder.
     * @returns a integer
     */
    get totalItemCount() {
        return this._totalItemCount;
    }
    ;
    /**
     * Gets the unreadItemCount property value. The number of items in the mailFolder marked as unread.
     * @returns a integer
     */
    get unreadItemCount() {
        return this._unreadItemCount;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([...super.getFieldDeserializers(),
            ["childFolderCount", (o, n) => { o.childFolderCount = n.getNumberValue(); }],
            ["childFolders", (o, n) => { o.childFolders = n.getCollectionOfObjectValues(MailFolder); }],
            ["displayName", (o, n) => { o.displayName = n.getStringValue(); }],
            ["isHidden", (o, n) => { o.isHidden = n.getBooleanValue(); }],
            ["messageRules", (o, n) => { o.messageRules = n.getCollectionOfObjectValues(messageRule_1.MessageRule); }],
            ["messages", (o, n) => { o.messages = n.getCollectionOfObjectValues(message_1.Message); }],
            ["multiValueExtendedProperties", (o, n) => { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", (o, n) => { o.parentFolderId = n.getStringValue(); }],
            ["singleValueExtendedProperties", (o, n) => { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["totalItemCount", (o, n) => { o.totalItemCount = n.getNumberValue(); }],
            ["unreadItemCount", (o, n) => { o.unreadItemCount = n.getNumberValue(); }],
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
        writer.writeNumberValue("childFolderCount", this.childFolderCount);
        writer.writeCollectionOfObjectValues("childFolders", this.childFolders);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isHidden", this.isHidden);
        writer.writeCollectionOfObjectValues("messageRules", this.messageRules);
        writer.writeCollectionOfObjectValues("messages", this.messages);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeNumberValue("totalItemCount", this.totalItemCount);
        writer.writeNumberValue("unreadItemCount", this.unreadItemCount);
    }
    ;
    /**
     * Sets the childFolderCount property value. The number of immediate child mailFolders in the current mailFolder.
     * @param value Value to set for the childFolderCount property.
     */
    set childFolderCount(value) {
        this._childFolderCount = value;
    }
    ;
    /**
     * Sets the childFolders property value. The collection of child folders in the mailFolder.
     * @param value Value to set for the childFolders property.
     */
    set childFolders(value) {
        this._childFolders = value;
    }
    ;
    /**
     * Sets the displayName property value. The mailFolder's display name.
     * @param value Value to set for the displayName property.
     */
    set displayName(value) {
        this._displayName = value;
    }
    ;
    /**
     * Sets the isHidden property value. Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more information in Hidden mail folders.
     * @param value Value to set for the isHidden property.
     */
    set isHidden(value) {
        this._isHidden = value;
    }
    ;
    /**
     * Sets the messageRules property value. The collection of rules that apply to the user's Inbox folder.
     * @param value Value to set for the messageRules property.
     */
    set messageRules(value) {
        this._messageRules = value;
    }
    ;
    /**
     * Sets the messages property value. The collection of messages in the mailFolder.
     * @param value Value to set for the messages property.
     */
    set messages(value) {
        this._messages = value;
    }
    ;
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    set multiValueExtendedProperties(value) {
        this._multiValueExtendedProperties = value;
    }
    ;
    /**
     * Sets the parentFolderId property value. The unique identifier for the mailFolder's parent mailFolder.
     * @param value Value to set for the parentFolderId property.
     */
    set parentFolderId(value) {
        this._parentFolderId = value;
    }
    ;
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    set singleValueExtendedProperties(value) {
        this._singleValueExtendedProperties = value;
    }
    ;
    /**
     * Sets the totalItemCount property value. The number of items in the mailFolder.
     * @param value Value to set for the totalItemCount property.
     */
    set totalItemCount(value) {
        this._totalItemCount = value;
    }
    ;
    /**
     * Sets the unreadItemCount property value. The number of items in the mailFolder marked as unread.
     * @param value Value to set for the unreadItemCount property.
     */
    set unreadItemCount(value) {
        this._unreadItemCount = value;
    }
    ;
}
exports.MailFolder = MailFolder;
//# sourceMappingURL=mailFolder.js.map