import { Importance } from './importance';
import { MessageActionFlag } from './messageActionFlag';
import { Recipient } from './recipient';
import { Sensitivity } from './sensitivity';
import { SizeRange } from './sizeRange';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class MessageRulePredicates implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    /** Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.  */
    private _bodyContains?;
    /** Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.  */
    private _bodyOrSubjectContains?;
    /** Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.  */
    private _categories?;
    /** Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.  */
    private _fromAddresses?;
    /** Indicates whether an incoming message must have attachments in order for the condition or exception to apply.  */
    private _hasAttachments?;
    /** Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.  */
    private _headerContains?;
    private _importance?;
    /** Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.  */
    private _isApprovalRequest?;
    /** Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.  */
    private _isAutomaticForward?;
    /** Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.  */
    private _isAutomaticReply?;
    /** Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.  */
    private _isEncrypted?;
    /** Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.  */
    private _isMeetingRequest?;
    /** Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.  */
    private _isMeetingResponse?;
    /** Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.  */
    private _isNonDeliveryReport?;
    /** Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.  */
    private _isPermissionControlled?;
    /** Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.  */
    private _isReadReceipt?;
    /** Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.  */
    private _isSigned?;
    /** Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.  */
    private _isVoicemail?;
    private _messageActionFlag?;
    /** Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.  */
    private _notSentToMe?;
    /** Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.  */
    private _recipientContains?;
    /** Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.  */
    private _senderContains?;
    private _sensitivity?;
    /** Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.  */
    private _sentCcMe?;
    /** Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.  */
    private _sentOnlyToMe?;
    /** Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.  */
    private _sentToAddresses?;
    /** Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.  */
    private _sentToMe?;
    /** Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.  */
    private _sentToOrCcMe?;
    /** Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.  */
    private _subjectContains?;
    private _withinSizeRange?;
    /**
     * Instantiates a new messageRulePredicates and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the bodyContains property value. Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get bodyContains(): string[] | undefined;
    /**
     * Gets the bodyOrSubjectContains property value. Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get bodyOrSubjectContains(): string[] | undefined;
    /**
     * Gets the categories property value. Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
     * @returns a string
     */
    get categories(): string[] | undefined;
    /**
     * Gets the fromAddresses property value. Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
     * @returns a recipient
     */
    get fromAddresses(): Recipient[] | undefined;
    /**
     * Gets the hasAttachments property value. Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
     * @returns a boolean
     */
    get hasAttachments(): boolean | undefined;
    /**
     * Gets the headerContains property value. Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get headerContains(): string[] | undefined;
    /**
     * Gets the importance property value.
     * @returns a importance
     */
    get importance(): Importance | undefined;
    /**
     * Gets the isApprovalRequest property value. Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isApprovalRequest(): boolean | undefined;
    /**
     * Gets the isAutomaticForward property value. Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isAutomaticForward(): boolean | undefined;
    /**
     * Gets the isAutomaticReply property value. Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isAutomaticReply(): boolean | undefined;
    /**
     * Gets the isEncrypted property value. Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isEncrypted(): boolean | undefined;
    /**
     * Gets the isMeetingRequest property value. Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isMeetingRequest(): boolean | undefined;
    /**
     * Gets the isMeetingResponse property value. Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isMeetingResponse(): boolean | undefined;
    /**
     * Gets the isNonDeliveryReport property value. Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isNonDeliveryReport(): boolean | undefined;
    /**
     * Gets the isPermissionControlled property value. Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isPermissionControlled(): boolean | undefined;
    /**
     * Gets the isReadReceipt property value. Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isReadReceipt(): boolean | undefined;
    /**
     * Gets the isSigned property value. Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isSigned(): boolean | undefined;
    /**
     * Gets the isVoicemail property value. Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
     * @returns a boolean
     */
    get isVoicemail(): boolean | undefined;
    /**
     * Gets the messageActionFlag property value.
     * @returns a messageActionFlag
     */
    get messageActionFlag(): MessageActionFlag | undefined;
    /**
     * Gets the notSentToMe property value. Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get notSentToMe(): boolean | undefined;
    /**
     * Gets the recipientContains property value. Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get recipientContains(): string[] | undefined;
    /**
     * Gets the senderContains property value. Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get senderContains(): string[] | undefined;
    /**
     * Gets the sensitivity property value.
     * @returns a sensitivity
     */
    get sensitivity(): Sensitivity | undefined;
    /**
     * Gets the sentCcMe property value. Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get sentCcMe(): boolean | undefined;
    /**
     * Gets the sentOnlyToMe property value. Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get sentOnlyToMe(): boolean | undefined;
    /**
     * Gets the sentToAddresses property value. Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
     * @returns a recipient
     */
    get sentToAddresses(): Recipient[] | undefined;
    /**
     * Gets the sentToMe property value. Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get sentToMe(): boolean | undefined;
    /**
     * Gets the sentToOrCcMe property value. Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @returns a boolean
     */
    get sentToOrCcMe(): boolean | undefined;
    /**
     * Gets the subjectContains property value. Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
     * @returns a string
     */
    get subjectContains(): string[] | undefined;
    /**
     * Gets the withinSizeRange property value.
     * @returns a sizeRange
     */
    get withinSizeRange(): SizeRange | undefined;
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
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    set additionalData(value: Map<string, unknown>);
    /**
     * Sets the bodyContains property value. Represents the strings that should appear in the body of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the bodyContains property.
     */
    set bodyContains(value: string[] | undefined);
    /**
     * Sets the bodyOrSubjectContains property value. Represents the strings that should appear in the body or subject of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the bodyOrSubjectContains property.
     */
    set bodyOrSubjectContains(value: string[] | undefined);
    /**
     * Sets the categories property value. Represents the categories that an incoming message should be labeled with in order for the condition or exception to apply.
     * @param value Value to set for the categories property.
     */
    set categories(value: string[] | undefined);
    /**
     * Sets the fromAddresses property value. Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the fromAddresses property.
     */
    set fromAddresses(value: Recipient[] | undefined);
    /**
     * Sets the hasAttachments property value. Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
     * @param value Value to set for the hasAttachments property.
     */
    set hasAttachments(value: boolean | undefined);
    /**
     * Sets the headerContains property value. Represents the strings that appear in the headers of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the headerContains property.
     */
    set headerContains(value: string[] | undefined);
    /**
     * Sets the importance property value.
     * @param value Value to set for the importance property.
     */
    set importance(value: Importance | undefined);
    /**
     * Sets the isApprovalRequest property value. Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
     * @param value Value to set for the isApprovalRequest property.
     */
    set isApprovalRequest(value: boolean | undefined);
    /**
     * Sets the isAutomaticForward property value. Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
     * @param value Value to set for the isAutomaticForward property.
     */
    set isAutomaticForward(value: boolean | undefined);
    /**
     * Sets the isAutomaticReply property value. Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
     * @param value Value to set for the isAutomaticReply property.
     */
    set isAutomaticReply(value: boolean | undefined);
    /**
     * Sets the isEncrypted property value. Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
     * @param value Value to set for the isEncrypted property.
     */
    set isEncrypted(value: boolean | undefined);
    /**
     * Sets the isMeetingRequest property value. Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
     * @param value Value to set for the isMeetingRequest property.
     */
    set isMeetingRequest(value: boolean | undefined);
    /**
     * Sets the isMeetingResponse property value. Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
     * @param value Value to set for the isMeetingResponse property.
     */
    set isMeetingResponse(value: boolean | undefined);
    /**
     * Sets the isNonDeliveryReport property value. Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
     * @param value Value to set for the isNonDeliveryReport property.
     */
    set isNonDeliveryReport(value: boolean | undefined);
    /**
     * Sets the isPermissionControlled property value. Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or exception to apply.
     * @param value Value to set for the isPermissionControlled property.
     */
    set isPermissionControlled(value: boolean | undefined);
    /**
     * Sets the isReadReceipt property value. Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
     * @param value Value to set for the isReadReceipt property.
     */
    set isReadReceipt(value: boolean | undefined);
    /**
     * Sets the isSigned property value. Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
     * @param value Value to set for the isSigned property.
     */
    set isSigned(value: boolean | undefined);
    /**
     * Sets the isVoicemail property value. Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
     * @param value Value to set for the isVoicemail property.
     */
    set isVoicemail(value: boolean | undefined);
    /**
     * Sets the messageActionFlag property value.
     * @param value Value to set for the messageActionFlag property.
     */
    set messageActionFlag(value: MessageActionFlag | undefined);
    /**
     * Sets the notSentToMe property value. Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the notSentToMe property.
     */
    set notSentToMe(value: boolean | undefined);
    /**
     * Sets the recipientContains property value. Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the recipientContains property.
     */
    set recipientContains(value: string[] | undefined);
    /**
     * Sets the senderContains property value. Represents the strings that appear in the from property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the senderContains property.
     */
    set senderContains(value: string[] | undefined);
    /**
     * Sets the sensitivity property value.
     * @param value Value to set for the sensitivity property.
     */
    set sensitivity(value: Sensitivity | undefined);
    /**
     * Sets the sentCcMe property value. Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentCcMe property.
     */
    set sentCcMe(value: boolean | undefined);
    /**
     * Sets the sentOnlyToMe property value. Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentOnlyToMe property.
     */
    set sentOnlyToMe(value: boolean | undefined);
    /**
     * Sets the sentToAddresses property value. Represents the email addresses that an incoming message must have been sent to in order for the condition or exception to apply.
     * @param value Value to set for the sentToAddresses property.
     */
    set sentToAddresses(value: Recipient[] | undefined);
    /**
     * Sets the sentToMe property value. Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentToMe property.
     */
    set sentToMe(value: boolean | undefined);
    /**
     * Sets the sentToOrCcMe property value. Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the sentToOrCcMe property.
     */
    set sentToOrCcMe(value: boolean | undefined);
    /**
     * Sets the subjectContains property value. Represents the strings that appear in the subject of an incoming message in order for the condition or exception to apply.
     * @param value Value to set for the subjectContains property.
     */
    set subjectContains(value: string[] | undefined);
    /**
     * Sets the withinSizeRange property value.
     * @param value Value to set for the withinSizeRange property.
     */
    set withinSizeRange(value: SizeRange | undefined);
}
//# sourceMappingURL=messageRulePredicates.d.ts.map