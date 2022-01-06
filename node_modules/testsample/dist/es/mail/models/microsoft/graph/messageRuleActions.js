import { Importance } from './importance';
import { Recipient } from './recipient';
export class MessageRuleActions {
    /**
     * Instantiates a new messageRuleActions and sets the default values.
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
     * Gets the assignCategories property value. A list of categories to be assigned to a message.
     * @returns a string
     */
    get assignCategories() {
        return this._assignCategories;
    }
    ;
    /**
     * Gets the copyToFolder property value. The ID of a folder that a message is to be copied to.
     * @returns a string
     */
    get copyToFolder() {
        return this._copyToFolder;
    }
    ;
    /**
     * Gets the delete property value. Indicates whether a message should be moved to the Deleted Items folder.
     * @returns a boolean
     */
    get delete() {
        return this._delete;
    }
    ;
    /**
     * Gets the forwardAsAttachmentTo property value. The email addresses of the recipients to which a message should be forwarded as an attachment.
     * @returns a recipient
     */
    get forwardAsAttachmentTo() {
        return this._forwardAsAttachmentTo;
    }
    ;
    /**
     * Gets the forwardTo property value. The email addresses of the recipients to which a message should be forwarded.
     * @returns a recipient
     */
    get forwardTo() {
        return this._forwardTo;
    }
    ;
    /**
     * Gets the markAsRead property value. Indicates whether a message should be marked as read.
     * @returns a boolean
     */
    get markAsRead() {
        return this._markAsRead;
    }
    ;
    /**
     * Gets the markImportance property value.
     * @returns a importance
     */
    get markImportance() {
        return this._markImportance;
    }
    ;
    /**
     * Gets the moveToFolder property value. The ID of the folder that a message will be moved to.
     * @returns a string
     */
    get moveToFolder() {
        return this._moveToFolder;
    }
    ;
    /**
     * Gets the permanentDelete property value. Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
     * @returns a boolean
     */
    get permanentDelete() {
        return this._permanentDelete;
    }
    ;
    /**
     * Gets the redirectTo property value. The email addresses to which a message should be redirected.
     * @returns a recipient
     */
    get redirectTo() {
        return this._redirectTo;
    }
    ;
    /**
     * Gets the stopProcessingRules property value. Indicates whether subsequent rules should be evaluated.
     * @returns a boolean
     */
    get stopProcessingRules() {
        return this._stopProcessingRules;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["assignCategories", (o, n) => { o.assignCategories = n.getCollectionOfPrimitiveValues(); }],
            ["copyToFolder", (o, n) => { o.copyToFolder = n.getStringValue(); }],
            ["delete", (o, n) => { o.delete = n.getBooleanValue(); }],
            ["forwardAsAttachmentTo", (o, n) => { o.forwardAsAttachmentTo = n.getCollectionOfObjectValues(Recipient); }],
            ["forwardTo", (o, n) => { o.forwardTo = n.getCollectionOfObjectValues(Recipient); }],
            ["markAsRead", (o, n) => { o.markAsRead = n.getBooleanValue(); }],
            ["markImportance", (o, n) => { o.markImportance = n.getEnumValue(Importance); }],
            ["moveToFolder", (o, n) => { o.moveToFolder = n.getStringValue(); }],
            ["permanentDelete", (o, n) => { o.permanentDelete = n.getBooleanValue(); }],
            ["redirectTo", (o, n) => { o.redirectTo = n.getCollectionOfObjectValues(Recipient); }],
            ["stopProcessingRules", (o, n) => { o.stopProcessingRules = n.getBooleanValue(); }],
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
        writer.writeCollectionOfPrimitiveValues("assignCategories", this.assignCategories);
        writer.writeStringValue("copyToFolder", this.copyToFolder);
        writer.writeBooleanValue("delete", this.delete);
        writer.writeCollectionOfObjectValues("forwardAsAttachmentTo", this.forwardAsAttachmentTo);
        writer.writeCollectionOfObjectValues("forwardTo", this.forwardTo);
        writer.writeBooleanValue("markAsRead", this.markAsRead);
        writer.writeEnumValue("markImportance", this.markImportance);
        writer.writeStringValue("moveToFolder", this.moveToFolder);
        writer.writeBooleanValue("permanentDelete", this.permanentDelete);
        writer.writeCollectionOfObjectValues("redirectTo", this.redirectTo);
        writer.writeBooleanValue("stopProcessingRules", this.stopProcessingRules);
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
     * Sets the assignCategories property value. A list of categories to be assigned to a message.
     * @param value Value to set for the assignCategories property.
     */
    set assignCategories(value) {
        this._assignCategories = value;
    }
    ;
    /**
     * Sets the copyToFolder property value. The ID of a folder that a message is to be copied to.
     * @param value Value to set for the copyToFolder property.
     */
    set copyToFolder(value) {
        this._copyToFolder = value;
    }
    ;
    /**
     * Sets the delete property value. Indicates whether a message should be moved to the Deleted Items folder.
     * @param value Value to set for the delete property.
     */
    set delete(value) {
        this._delete = value;
    }
    ;
    /**
     * Sets the forwardAsAttachmentTo property value. The email addresses of the recipients to which a message should be forwarded as an attachment.
     * @param value Value to set for the forwardAsAttachmentTo property.
     */
    set forwardAsAttachmentTo(value) {
        this._forwardAsAttachmentTo = value;
    }
    ;
    /**
     * Sets the forwardTo property value. The email addresses of the recipients to which a message should be forwarded.
     * @param value Value to set for the forwardTo property.
     */
    set forwardTo(value) {
        this._forwardTo = value;
    }
    ;
    /**
     * Sets the markAsRead property value. Indicates whether a message should be marked as read.
     * @param value Value to set for the markAsRead property.
     */
    set markAsRead(value) {
        this._markAsRead = value;
    }
    ;
    /**
     * Sets the markImportance property value.
     * @param value Value to set for the markImportance property.
     */
    set markImportance(value) {
        this._markImportance = value;
    }
    ;
    /**
     * Sets the moveToFolder property value. The ID of the folder that a message will be moved to.
     * @param value Value to set for the moveToFolder property.
     */
    set moveToFolder(value) {
        this._moveToFolder = value;
    }
    ;
    /**
     * Sets the permanentDelete property value. Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
     * @param value Value to set for the permanentDelete property.
     */
    set permanentDelete(value) {
        this._permanentDelete = value;
    }
    ;
    /**
     * Sets the redirectTo property value. The email addresses to which a message should be redirected.
     * @param value Value to set for the redirectTo property.
     */
    set redirectTo(value) {
        this._redirectTo = value;
    }
    ;
    /**
     * Sets the stopProcessingRules property value. Indicates whether subsequent rules should be evaluated.
     * @param value Value to set for the stopProcessingRules property.
     */
    set stopProcessingRules(value) {
        this._stopProcessingRules = value;
    }
    ;
}
//# sourceMappingURL=messageRuleActions.js.map