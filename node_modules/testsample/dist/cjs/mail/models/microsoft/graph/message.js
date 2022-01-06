"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const attachment_1 = require("./attachment");
const extension_1 = require("./extension");
const followupFlag_1 = require("./followupFlag");
const importance_1 = require("./importance");
const inferenceClassificationType_1 = require("./inferenceClassificationType");
const internetMessageHeader_1 = require("./internetMessageHeader");
const itemBody_1 = require("./itemBody");
const multiValueLegacyExtendedProperty_1 = require("./multiValueLegacyExtendedProperty");
const outlookItem_1 = require("./outlookItem");
const recipient_1 = require("./recipient");
const singleValueLegacyExtendedProperty_1 = require("./singleValueLegacyExtendedProperty");
class Message extends outlookItem_1.OutlookItem {
    /**
     * Instantiates a new message and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
     * @returns a attachment
     */
    get attachments() {
        return this._attachments;
    }
    ;
    /**
     * Gets the bccRecipients property value. The Bcc: recipients for the message.
     * @returns a recipient
     */
    get bccRecipients() {
        return this._bccRecipients;
    }
    ;
    /**
     * Gets the body property value.
     * @returns a itemBody
     */
    get body() {
        return this._body;
    }
    ;
    /**
     * Gets the bodyPreview property value. The first 255 characters of the message body. It is in text format.
     * @returns a string
     */
    get bodyPreview() {
        return this._bodyPreview;
    }
    ;
    /**
     * Gets the ccRecipients property value. The Cc: recipients for the message.
     * @returns a recipient
     */
    get ccRecipients() {
        return this._ccRecipients;
    }
    ;
    /**
     * Gets the conversationId property value. The ID of the conversation the email belongs to.
     * @returns a string
     */
    get conversationId() {
        return this._conversationId;
    }
    ;
    /**
     * Gets the conversationIndex property value. Indicates the position of the message within the conversation.
     * @returns a binary
     */
    get conversationIndex() {
        return this._conversationIndex;
    }
    ;
    /**
     * Gets the extensions property value. The collection of open extensions defined for the message. Nullable.
     * @returns a extension
     */
    get extensions() {
        return this._extensions;
    }
    ;
    /**
     * Gets the flag property value.
     * @returns a followupFlag
     */
    get flag() {
        return this._flag;
    }
    ;
    /**
     * Gets the from property value.
     * @returns a recipient
     */
    get from() {
        return this._from;
    }
    ;
    /**
     * Gets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
     * @returns a boolean
     */
    get hasAttachments() {
        return this._hasAttachments;
    }
    ;
    /**
     * Gets the importance property value.
     * @returns a importance
     */
    get importance() {
        return this._importance;
    }
    ;
    /**
     * Gets the inferenceClassification property value.
     * @returns a inferenceClassificationType
     */
    get inferenceClassification() {
        return this._inferenceClassification;
    }
    ;
    /**
     * Gets the internetMessageHeaders property value.
     * @returns a internetMessageHeader
     */
    get internetMessageHeaders() {
        return this._internetMessageHeaders;
    }
    ;
    /**
     * Gets the internetMessageId property value.
     * @returns a string
     */
    get internetMessageId() {
        return this._internetMessageId;
    }
    ;
    /**
     * Gets the isDeliveryReceiptRequested property value.
     * @returns a boolean
     */
    get isDeliveryReceiptRequested() {
        return this._isDeliveryReceiptRequested;
    }
    ;
    /**
     * Gets the isDraft property value.
     * @returns a boolean
     */
    get isDraft() {
        return this._isDraft;
    }
    ;
    /**
     * Gets the isRead property value.
     * @returns a boolean
     */
    get isRead() {
        return this._isRead;
    }
    ;
    /**
     * Gets the isReadReceiptRequested property value.
     * @returns a boolean
     */
    get isReadReceiptRequested() {
        return this._isReadReceiptRequested;
    }
    ;
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    }
    ;
    /**
     * Gets the parentFolderId property value.
     * @returns a string
     */
    get parentFolderId() {
        return this._parentFolderId;
    }
    ;
    /**
     * Gets the receivedDateTime property value.
     * @returns a Date
     */
    get receivedDateTime() {
        return this._receivedDateTime;
    }
    ;
    /**
     * Gets the replyTo property value.
     * @returns a recipient
     */
    get replyTo() {
        return this._replyTo;
    }
    ;
    /**
     * Gets the sender property value.
     * @returns a recipient
     */
    get sender() {
        return this._sender;
    }
    ;
    /**
     * Gets the sentDateTime property value.
     * @returns a Date
     */
    get sentDateTime() {
        return this._sentDateTime;
    }
    ;
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    }
    ;
    /**
     * Gets the subject property value.
     * @returns a string
     */
    get subject() {
        return this._subject;
    }
    ;
    /**
     * Gets the toRecipients property value.
     * @returns a recipient
     */
    get toRecipients() {
        return this._toRecipients;
    }
    ;
    /**
     * Gets the uniqueBody property value.
     * @returns a itemBody
     */
    get uniqueBody() {
        return this._uniqueBody;
    }
    ;
    /**
     * Gets the webLink property value.
     * @returns a string
     */
    get webLink() {
        return this._webLink;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([...super.getFieldDeserializers(),
            ["attachments", (o, n) => { o.attachments = n.getCollectionOfObjectValues(attachment_1.Attachment); }],
            ["bccRecipients", (o, n) => { o.bccRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["body", (o, n) => { o.body = n.getObjectValue(itemBody_1.ItemBody); }],
            ["bodyPreview", (o, n) => { o.bodyPreview = n.getStringValue(); }],
            ["ccRecipients", (o, n) => { o.ccRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["conversationId", (o, n) => { o.conversationId = n.getStringValue(); }],
            ["conversationIndex", (o, n) => { o.conversationIndex = n.getStringValue(); }],
            ["extensions", (o, n) => { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["flag", (o, n) => { o.flag = n.getObjectValue(followupFlag_1.FollowupFlag); }],
            ["from", (o, n) => { o.from = n.getObjectValue(recipient_1.Recipient); }],
            ["hasAttachments", (o, n) => { o.hasAttachments = n.getBooleanValue(); }],
            ["importance", (o, n) => { o.importance = n.getEnumValue(importance_1.Importance); }],
            ["inferenceClassification", (o, n) => { o.inferenceClassification = n.getEnumValue(inferenceClassificationType_1.InferenceClassificationType); }],
            ["internetMessageHeaders", (o, n) => { o.internetMessageHeaders = n.getCollectionOfObjectValues(internetMessageHeader_1.InternetMessageHeader); }],
            ["internetMessageId", (o, n) => { o.internetMessageId = n.getStringValue(); }],
            ["isDeliveryReceiptRequested", (o, n) => { o.isDeliveryReceiptRequested = n.getBooleanValue(); }],
            ["isDraft", (o, n) => { o.isDraft = n.getBooleanValue(); }],
            ["isRead", (o, n) => { o.isRead = n.getBooleanValue(); }],
            ["isReadReceiptRequested", (o, n) => { o.isReadReceiptRequested = n.getBooleanValue(); }],
            ["multiValueExtendedProperties", (o, n) => { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", (o, n) => { o.parentFolderId = n.getStringValue(); }],
            ["receivedDateTime", (o, n) => { o.receivedDateTime = n.getDateValue(); }],
            ["replyTo", (o, n) => { o.replyTo = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["sender", (o, n) => { o.sender = n.getObjectValue(recipient_1.Recipient); }],
            ["sentDateTime", (o, n) => { o.sentDateTime = n.getDateValue(); }],
            ["singleValueExtendedProperties", (o, n) => { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["subject", (o, n) => { o.subject = n.getStringValue(); }],
            ["toRecipients", (o, n) => { o.toRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["uniqueBody", (o, n) => { o.uniqueBody = n.getObjectValue(itemBody_1.ItemBody); }],
            ["webLink", (o, n) => { o.webLink = n.getStringValue(); }],
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
        writer.writeCollectionOfObjectValues("attachments", this.attachments);
        writer.writeCollectionOfObjectValues("bccRecipients", this.bccRecipients);
        writer.writeObjectValue("body", this.body);
        writer.writeStringValue("bodyPreview", this.bodyPreview);
        writer.writeCollectionOfObjectValues("ccRecipients", this.ccRecipients);
        writer.writeStringValue("conversationId", this.conversationId);
        writer.writeStringValue("conversationIndex", this.conversationIndex);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeObjectValue("flag", this.flag);
        writer.writeObjectValue("from", this.from);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeEnumValue("importance", this.importance);
        writer.writeEnumValue("inferenceClassification", this.inferenceClassification);
        writer.writeCollectionOfObjectValues("internetMessageHeaders", this.internetMessageHeaders);
        writer.writeStringValue("internetMessageId", this.internetMessageId);
        writer.writeBooleanValue("isDeliveryReceiptRequested", this.isDeliveryReceiptRequested);
        writer.writeBooleanValue("isDraft", this.isDraft);
        writer.writeBooleanValue("isRead", this.isRead);
        writer.writeBooleanValue("isReadReceiptRequested", this.isReadReceiptRequested);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeDateValue("receivedDateTime", this.receivedDateTime);
        writer.writeCollectionOfObjectValues("replyTo", this.replyTo);
        writer.writeObjectValue("sender", this.sender);
        writer.writeDateValue("sentDateTime", this.sentDateTime);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeStringValue("subject", this.subject);
        writer.writeCollectionOfObjectValues("toRecipients", this.toRecipients);
        writer.writeObjectValue("uniqueBody", this.uniqueBody);
        writer.writeStringValue("webLink", this.webLink);
    }
    ;
    /**
     * Sets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
     * @param value Value to set for the attachments property.
     */
    set attachments(value) {
        this._attachments = value;
    }
    ;
    /**
     * Sets the bccRecipients property value. The Bcc: recipients for the message.
     * @param value Value to set for the bccRecipients property.
     */
    set bccRecipients(value) {
        this._bccRecipients = value;
    }
    ;
    /**
     * Sets the body property value.
     * @param value Value to set for the body property.
     */
    set body(value) {
        this._body = value;
    }
    ;
    /**
     * Sets the bodyPreview property value. The first 255 characters of the message body. It is in text format.
     * @param value Value to set for the bodyPreview property.
     */
    set bodyPreview(value) {
        this._bodyPreview = value;
    }
    ;
    /**
     * Sets the ccRecipients property value. The Cc: recipients for the message.
     * @param value Value to set for the ccRecipients property.
     */
    set ccRecipients(value) {
        this._ccRecipients = value;
    }
    ;
    /**
     * Sets the conversationId property value. The ID of the conversation the email belongs to.
     * @param value Value to set for the conversationId property.
     */
    set conversationId(value) {
        this._conversationId = value;
    }
    ;
    /**
     * Sets the conversationIndex property value. Indicates the position of the message within the conversation.
     * @param value Value to set for the conversationIndex property.
     */
    set conversationIndex(value) {
        this._conversationIndex = value;
    }
    ;
    /**
     * Sets the extensions property value. The collection of open extensions defined for the message. Nullable.
     * @param value Value to set for the extensions property.
     */
    set extensions(value) {
        this._extensions = value;
    }
    ;
    /**
     * Sets the flag property value.
     * @param value Value to set for the flag property.
     */
    set flag(value) {
        this._flag = value;
    }
    ;
    /**
     * Sets the from property value.
     * @param value Value to set for the from property.
     */
    set from(value) {
        this._from = value;
    }
    ;
    /**
     * Sets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
     * @param value Value to set for the hasAttachments property.
     */
    set hasAttachments(value) {
        this._hasAttachments = value;
    }
    ;
    /**
     * Sets the importance property value.
     * @param value Value to set for the importance property.
     */
    set importance(value) {
        this._importance = value;
    }
    ;
    /**
     * Sets the inferenceClassification property value.
     * @param value Value to set for the inferenceClassification property.
     */
    set inferenceClassification(value) {
        this._inferenceClassification = value;
    }
    ;
    /**
     * Sets the internetMessageHeaders property value.
     * @param value Value to set for the internetMessageHeaders property.
     */
    set internetMessageHeaders(value) {
        this._internetMessageHeaders = value;
    }
    ;
    /**
     * Sets the internetMessageId property value.
     * @param value Value to set for the internetMessageId property.
     */
    set internetMessageId(value) {
        this._internetMessageId = value;
    }
    ;
    /**
     * Sets the isDeliveryReceiptRequested property value.
     * @param value Value to set for the isDeliveryReceiptRequested property.
     */
    set isDeliveryReceiptRequested(value) {
        this._isDeliveryReceiptRequested = value;
    }
    ;
    /**
     * Sets the isDraft property value.
     * @param value Value to set for the isDraft property.
     */
    set isDraft(value) {
        this._isDraft = value;
    }
    ;
    /**
     * Sets the isRead property value.
     * @param value Value to set for the isRead property.
     */
    set isRead(value) {
        this._isRead = value;
    }
    ;
    /**
     * Sets the isReadReceiptRequested property value.
     * @param value Value to set for the isReadReceiptRequested property.
     */
    set isReadReceiptRequested(value) {
        this._isReadReceiptRequested = value;
    }
    ;
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    set multiValueExtendedProperties(value) {
        this._multiValueExtendedProperties = value;
    }
    ;
    /**
     * Sets the parentFolderId property value.
     * @param value Value to set for the parentFolderId property.
     */
    set parentFolderId(value) {
        this._parentFolderId = value;
    }
    ;
    /**
     * Sets the receivedDateTime property value.
     * @param value Value to set for the receivedDateTime property.
     */
    set receivedDateTime(value) {
        this._receivedDateTime = value;
    }
    ;
    /**
     * Sets the replyTo property value.
     * @param value Value to set for the replyTo property.
     */
    set replyTo(value) {
        this._replyTo = value;
    }
    ;
    /**
     * Sets the sender property value.
     * @param value Value to set for the sender property.
     */
    set sender(value) {
        this._sender = value;
    }
    ;
    /**
     * Sets the sentDateTime property value.
     * @param value Value to set for the sentDateTime property.
     */
    set sentDateTime(value) {
        this._sentDateTime = value;
    }
    ;
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    set singleValueExtendedProperties(value) {
        this._singleValueExtendedProperties = value;
    }
    ;
    /**
     * Sets the subject property value.
     * @param value Value to set for the subject property.
     */
    set subject(value) {
        this._subject = value;
    }
    ;
    /**
     * Sets the toRecipients property value.
     * @param value Value to set for the toRecipients property.
     */
    set toRecipients(value) {
        this._toRecipients = value;
    }
    ;
    /**
     * Sets the uniqueBody property value.
     * @param value Value to set for the uniqueBody property.
     */
    set uniqueBody(value) {
        this._uniqueBody = value;
    }
    ;
    /**
     * Sets the webLink property value.
     * @param value Value to set for the webLink property.
     */
    set webLink(value) {
        this._webLink = value;
    }
    ;
}
exports.Message = Message;
//# sourceMappingURL=message.js.map