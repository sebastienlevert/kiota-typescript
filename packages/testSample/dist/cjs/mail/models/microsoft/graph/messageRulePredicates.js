"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRulePredicates = void 0;
const importance_1 = require("./importance");
const messageActionFlag_1 = require("./messageActionFlag");
const recipient_1 = require("./recipient");
const sensitivity_1 = require("./sensitivity");
const sizeRange_1 = require("./sizeRange");
class MessageRulePredicates {
    /**
     * Instantiates a new messageRulePredicates and sets the default values.
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
     * Gets the bodyContains property value. Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get bodyContains() {
        return this._bodyContains;
    }
    ;
    /**
     * Gets the bodyOrSubjectContains property value. Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get bodyOrSubjectContains() {
        return this._bodyOrSubjectContains;
    }
    ;
    /**
     * Gets the categories property value. Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
     * @returns a string
     */
    get categories() {
        return this._categories;
    }
    ;
    /**
     * Gets the fromAddresses property value. Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
     * @returns a recipient
     */
    get fromAddresses() {
        return this._fromAddresses;
    }
    ;
    /**
     * Gets the hasAttachments property value. Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
     * @returns a boolean
     */
    get hasAttachments() {
        return this._hasAttachments;
    }
    ;
    /**
     * Gets the headerContains property value. Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get headerContains() {
        return this._headerContains;
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
     * Gets the isApprovalRequest property value. Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isApprovalRequest() {
        return this._isApprovalRequest;
    }
    ;
    /**
     * Gets the isAutomaticForward property value. Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isAutomaticForward() {
        return this._isAutomaticForward;
    }
    ;
    /**
     * Gets the isAutomaticReply property value. Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isAutomaticReply() {
        return this._isAutomaticReply;
    }
    ;
    /**
     * Gets the isEncrypted property value. Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isEncrypted() {
        return this._isEncrypted;
    }
    ;
    /**
     * Gets the isMeetingRequest property value. Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isMeetingRequest() {
        return this._isMeetingRequest;
    }
    ;
    /**
     * Gets the isMeetingResponse property value. Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isMeetingResponse() {
        return this._isMeetingResponse;
    }
    ;
    /**
     * Gets the isNonDeliveryReport property value. Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isNonDeliveryReport() {
        return this._isNonDeliveryReport;
    }
    ;
    /**
     * Gets the isPermissionControlled property value. Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isPermissionControlled() {
        return this._isPermissionControlled;
    }
    ;
    /**
     * Gets the isReadReceipt property value. Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isReadReceipt() {
        return this._isReadReceipt;
    }
    ;
    /**
     * Gets the isSigned property value. Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isSigned() {
        return this._isSigned;
    }
    ;
    /**
     * Gets the isVoicemail property value. Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isVoicemail() {
        return this._isVoicemail;
    }
    ;
    /**
     * Gets the messageActionFlag property value.
     * @returns a messageActionFlag
     */
    get messageActionFlag() {
        return this._messageActionFlag;
    }
    ;
    /**
     * Gets the notSentToMe property value. Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get notSentToMe() {
        return this._notSentToMe;
    }
    ;
    /**
     * Gets the recipientContains property value. Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get recipientContains() {
        return this._recipientContains;
    }
    ;
    /**
     * Gets the senderContains property value. Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get senderContains() {
        return this._senderContains;
    }
    ;
    /**
     * Gets the sensitivity property value.
     * @returns a sensitivity
     */
    get sensitivity() {
        return this._sensitivity;
    }
    ;
    /**
     * Gets the sentCcMe property value. Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get sentCcMe() {
        return this._sentCcMe;
    }
    ;
    /**
     * Gets the sentOnlyToMe property value. Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get sentOnlyToMe() {
        return this._sentOnlyToMe;
    }
    ;
    /**
     * Gets the sentToAddresses property value. Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
     * @returns a recipient
     */
    get sentToAddresses() {
        return this._sentToAddresses;
    }
    ;
    /**
     * Gets the sentToMe property value. Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get sentToMe() {
        return this._sentToMe;
    }
    ;
    /**
     * Gets the sentToOrCcMe property value. Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get sentToOrCcMe() {
        return this._sentToOrCcMe;
    }
    ;
    /**
     * Gets the subjectContains property value. Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get subjectContains() {
        return this._subjectContains;
    }
    ;
    /**
     * Gets the withinSizeRange property value.
     * @returns a sizeRange
     */
    get withinSizeRange() {
        return this._withinSizeRange;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["bodyContains", (o, n) => { o.bodyContains = n.getCollectionOfPrimitiveValues(); }],
            ["bodyOrSubjectContains", (o, n) => { o.bodyOrSubjectContains = n.getCollectionOfPrimitiveValues(); }],
            ["categories", (o, n) => { o.categories = n.getCollectionOfPrimitiveValues(); }],
            ["fromAddresses", (o, n) => { o.fromAddresses = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["hasAttachments", (o, n) => { o.hasAttachments = n.getBooleanValue(); }],
            ["headerContains", (o, n) => { o.headerContains = n.getCollectionOfPrimitiveValues(); }],
            ["importance", (o, n) => { o.importance = n.getEnumValue(importance_1.Importance); }],
            ["isApprovalRequest", (o, n) => { o.isApprovalRequest = n.getBooleanValue(); }],
            ["isAutomaticForward", (o, n) => { o.isAutomaticForward = n.getBooleanValue(); }],
            ["isAutomaticReply", (o, n) => { o.isAutomaticReply = n.getBooleanValue(); }],
            ["isEncrypted", (o, n) => { o.isEncrypted = n.getBooleanValue(); }],
            ["isMeetingRequest", (o, n) => { o.isMeetingRequest = n.getBooleanValue(); }],
            ["isMeetingResponse", (o, n) => { o.isMeetingResponse = n.getBooleanValue(); }],
            ["isNonDeliveryReport", (o, n) => { o.isNonDeliveryReport = n.getBooleanValue(); }],
            ["isPermissionControlled", (o, n) => { o.isPermissionControlled = n.getBooleanValue(); }],
            ["isReadReceipt", (o, n) => { o.isReadReceipt = n.getBooleanValue(); }],
            ["isSigned", (o, n) => { o.isSigned = n.getBooleanValue(); }],
            ["isVoicemail", (o, n) => { o.isVoicemail = n.getBooleanValue(); }],
            ["messageActionFlag", (o, n) => { o.messageActionFlag = n.getEnumValue(messageActionFlag_1.MessageActionFlag); }],
            ["notSentToMe", (o, n) => { o.notSentToMe = n.getBooleanValue(); }],
            ["recipientContains", (o, n) => { o.recipientContains = n.getCollectionOfPrimitiveValues(); }],
            ["senderContains", (o, n) => { o.senderContains = n.getCollectionOfPrimitiveValues(); }],
            ["sensitivity", (o, n) => { o.sensitivity = n.getEnumValue(sensitivity_1.Sensitivity); }],
            ["sentCcMe", (o, n) => { o.sentCcMe = n.getBooleanValue(); }],
            ["sentOnlyToMe", (o, n) => { o.sentOnlyToMe = n.getBooleanValue(); }],
            ["sentToAddresses", (o, n) => { o.sentToAddresses = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["sentToMe", (o, n) => { o.sentToMe = n.getBooleanValue(); }],
            ["sentToOrCcMe", (o, n) => { o.sentToOrCcMe = n.getBooleanValue(); }],
            ["subjectContains", (o, n) => { o.subjectContains = n.getCollectionOfPrimitiveValues(); }],
            ["withinSizeRange", (o, n) => { o.withinSizeRange = n.getObjectValue(sizeRange_1.SizeRange); }],
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
        writer.writeCollectionOfPrimitiveValues("bodyContains", this.bodyContains);
        writer.writeCollectionOfPrimitiveValues("bodyOrSubjectContains", this.bodyOrSubjectContains);
        writer.writeCollectionOfPrimitiveValues("categories", this.categories);
        writer.writeCollectionOfObjectValues("fromAddresses", this.fromAddresses);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeCollectionOfPrimitiveValues("headerContains", this.headerContains);
        writer.writeEnumValue("importance", this.importance);
        writer.writeBooleanValue("isApprovalRequest", this.isApprovalRequest);
        writer.writeBooleanValue("isAutomaticForward", this.isAutomaticForward);
        writer.writeBooleanValue("isAutomaticReply", this.isAutomaticReply);
        writer.writeBooleanValue("isEncrypted", this.isEncrypted);
        writer.writeBooleanValue("isMeetingRequest", this.isMeetingRequest);
        writer.writeBooleanValue("isMeetingResponse", this.isMeetingResponse);
        writer.writeBooleanValue("isNonDeliveryReport", this.isNonDeliveryReport);
        writer.writeBooleanValue("isPermissionControlled", this.isPermissionControlled);
        writer.writeBooleanValue("isReadReceipt", this.isReadReceipt);
        writer.writeBooleanValue("isSigned", this.isSigned);
        writer.writeBooleanValue("isVoicemail", this.isVoicemail);
        writer.writeEnumValue("messageActionFlag", this.messageActionFlag);
        writer.writeBooleanValue("notSentToMe", this.notSentToMe);
        writer.writeCollectionOfPrimitiveValues("recipientContains", this.recipientContains);
        writer.writeCollectionOfPrimitiveValues("senderContains", this.senderContains);
        writer.writeEnumValue("sensitivity", this.sensitivity);
        writer.writeBooleanValue("sentCcMe", this.sentCcMe);
        writer.writeBooleanValue("sentOnlyToMe", this.sentOnlyToMe);
        writer.writeCollectionOfObjectValues("sentToAddresses", this.sentToAddresses);
        writer.writeBooleanValue("sentToMe", this.sentToMe);
        writer.writeBooleanValue("sentToOrCcMe", this.sentToOrCcMe);
        writer.writeCollectionOfPrimitiveValues("subjectContains", this.subjectContains);
        writer.writeObjectValue("withinSizeRange", this.withinSizeRange);
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
     * Sets the bodyContains property value. Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the bodyContains property.
     */
    set bodyContains(value) {
        this._bodyContains = value;
    }
    ;
    /**
     * Sets the bodyOrSubjectContains property value. Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the bodyOrSubjectContains property.
     */
    set bodyOrSubjectContains(value) {
        this._bodyOrSubjectContains = value;
    }
    ;
    /**
     * Sets the categories property value. Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
     * @param value Value to set for the categories property.
     */
    set categories(value) {
        this._categories = value;
    }
    ;
    /**
     * Sets the fromAddresses property value. Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the fromAddresses property.
     */
    set fromAddresses(value) {
        this._fromAddresses = value;
    }
    ;
    /**
     * Sets the hasAttachments property value. Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
     * @param value Value to set for the hasAttachments property.
     */
    set hasAttachments(value) {
        this._hasAttachments = value;
    }
    ;
    /**
     * Sets the headerContains property value. Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the headerContains property.
     */
    set headerContains(value) {
        this._headerContains = value;
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
     * Sets the isApprovalRequest property value. Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
     * @param value Value to set for the isApprovalRequest property.
     */
    set isApprovalRequest(value) {
        this._isApprovalRequest = value;
    }
    ;
    /**
     * Sets the isAutomaticForward property value. Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
     * @param value Value to set for the isAutomaticForward property.
     */
    set isAutomaticForward(value) {
        this._isAutomaticForward = value;
    }
    ;
    /**
     * Sets the isAutomaticReply property value. Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
     * @param value Value to set for the isAutomaticReply property.
     */
    set isAutomaticReply(value) {
        this._isAutomaticReply = value;
    }
    ;
    /**
     * Sets the isEncrypted property value. Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
     * @param value Value to set for the isEncrypted property.
     */
    set isEncrypted(value) {
        this._isEncrypted = value;
    }
    ;
    /**
     * Sets the isMeetingRequest property value. Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
     * @param value Value to set for the isMeetingRequest property.
     */
    set isMeetingRequest(value) {
        this._isMeetingRequest = value;
    }
    ;
    /**
     * Sets the isMeetingResponse property value. Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
     * @param value Value to set for the isMeetingResponse property.
     */
    set isMeetingResponse(value) {
        this._isMeetingResponse = value;
    }
    ;
    /**
     * Sets the isNonDeliveryReport property value. Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
     * @param value Value to set for the isNonDeliveryReport property.
     */
    set isNonDeliveryReport(value) {
        this._isNonDeliveryReport = value;
    }
    ;
    /**
     * Sets the isPermissionControlled property value. Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
     * @param value Value to set for the isPermissionControlled property.
     */
    set isPermissionControlled(value) {
        this._isPermissionControlled = value;
    }
    ;
    /**
     * Sets the isReadReceipt property value. Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
     * @param value Value to set for the isReadReceipt property.
     */
    set isReadReceipt(value) {
        this._isReadReceipt = value;
    }
    ;
    /**
     * Sets the isSigned property value. Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
     * @param value Value to set for the isSigned property.
     */
    set isSigned(value) {
        this._isSigned = value;
    }
    ;
    /**
     * Sets the isVoicemail property value. Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
     * @param value Value to set for the isVoicemail property.
     */
    set isVoicemail(value) {
        this._isVoicemail = value;
    }
    ;
    /**
     * Sets the messageActionFlag property value.
     * @param value Value to set for the messageActionFlag property.
     */
    set messageActionFlag(value) {
        this._messageActionFlag = value;
    }
    ;
    /**
     * Sets the notSentToMe property value. Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the notSentToMe property.
     */
    set notSentToMe(value) {
        this._notSentToMe = value;
    }
    ;
    /**
     * Sets the recipientContains property value. Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the recipientContains property.
     */
    set recipientContains(value) {
        this._recipientContains = value;
    }
    ;
    /**
     * Sets the senderContains property value. Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the senderContains property.
     */
    set senderContains(value) {
        this._senderContains = value;
    }
    ;
    /**
     * Sets the sensitivity property value.
     * @param value Value to set for the sensitivity property.
     */
    set sensitivity(value) {
        this._sensitivity = value;
    }
    ;
    /**
     * Sets the sentCcMe property value. Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentCcMe property.
     */
    set sentCcMe(value) {
        this._sentCcMe = value;
    }
    ;
    /**
     * Sets the sentOnlyToMe property value. Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentOnlyToMe property.
     */
    set sentOnlyToMe(value) {
        this._sentOnlyToMe = value;
    }
    ;
    /**
     * Sets the sentToAddresses property value. Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
     * @param value Value to set for the sentToAddresses property.
     */
    set sentToAddresses(value) {
        this._sentToAddresses = value;
    }
    ;
    /**
     * Sets the sentToMe property value. Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentToMe property.
     */
    set sentToMe(value) {
        this._sentToMe = value;
    }
    ;
    /**
     * Sets the sentToOrCcMe property value. Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentToOrCcMe property.
     */
    set sentToOrCcMe(value) {
        this._sentToOrCcMe = value;
    }
    ;
    /**
     * Sets the subjectContains property value. Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the subjectContains property.
     */
    set subjectContains(value) {
        this._subjectContains = value;
    }
    ;
    /**
     * Sets the withinSizeRange property value.
     * @param value Value to set for the withinSizeRange property.
     */
    set withinSizeRange(value) {
        this._withinSizeRange = value;
    }
    ;
}
exports.MessageRulePredicates = MessageRulePredicates;
//# sourceMappingURL=messageRulePredicates.js.map