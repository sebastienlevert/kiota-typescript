import { Attachment } from './attachment';
import { Extension } from './extension';
import { FollowupFlag } from './followupFlag';
import { Importance } from './importance';
import { InferenceClassificationType } from './inferenceClassificationType';
import { InternetMessageHeader } from './internetMessageHeader';
import { ItemBody } from './itemBody';
import { MultiValueLegacyExtendedProperty } from './multiValueLegacyExtendedProperty';
import { OutlookItem } from './outlookItem';
import { Recipient } from './recipient';
import { SingleValueLegacyExtendedProperty } from './singleValueLegacyExtendedProperty';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class Message extends OutlookItem implements Parsable {
    /** The fileAttachment and itemAttachment attachments for the message.  */
    private _attachments?;
    /** The Bcc: recipients for the message.  */
    private _bccRecipients?;
    private _body?;
    /** The first 255 characters of the message body. It is in text format.  */
    private _bodyPreview?;
    /** The Cc: recipients for the message.  */
    private _ccRecipients?;
    /** The ID of the conversation the email belongs to.  */
    private _conversationId?;
    /** Indicates the position of the message within the conversation.  */
    private _conversationIndex?;
    /** The collection of open extensions defined for the message. Nullable.  */
    private _extensions?;
    private _flag?;
    private _from?;
    /** Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.  */
    private _hasAttachments?;
    private _importance?;
    private _inferenceClassification?;
    private _internetMessageHeaders?;
    private _internetMessageId?;
    private _isDeliveryReceiptRequested?;
    private _isDraft?;
    private _isRead?;
    private _isReadReceiptRequested?;
    /** The collection of multi-value extended properties defined for the message. Nullable.  */
    private _multiValueExtendedProperties?;
    private _parentFolderId?;
    private _receivedDateTime?;
    private _replyTo?;
    private _sender?;
    private _sentDateTime?;
    /** The collection of single-value extended properties defined for the message. Nullable.  */
    private _singleValueExtendedProperties?;
    private _subject?;
    private _toRecipients?;
    private _uniqueBody?;
    private _webLink?;
    /**
     * Instantiates a new message and sets the default values.
     */
    constructor();
    /**
     * Gets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
     * @returns a attachment
     */
    get attachments(): Attachment[] | undefined;
    /**
     * Gets the bccRecipients property value. The Bcc: recipients for the message.
     * @returns a recipient
     */
    get bccRecipients(): Recipient[] | undefined;
    /**
     * Gets the body property value.
     * @returns a itemBody
     */
    get body(): ItemBody | undefined;
    /**
     * Gets the bodyPreview property value. The first 255 characters of the message body. It is in text format.
     * @returns a string
     */
    get bodyPreview(): string | undefined;
    /**
     * Gets the ccRecipients property value. The Cc: recipients for the message.
     * @returns a recipient
     */
    get ccRecipients(): Recipient[] | undefined;
    /**
     * Gets the conversationId property value. The ID of the conversation the email belongs to.
     * @returns a string
     */
    get conversationId(): string | undefined;
    /**
     * Gets the conversationIndex property value. Indicates the position of the message within the conversation.
     * @returns a binary
     */
    get conversationIndex(): string | undefined;
    /**
     * Gets the extensions property value. The collection of open extensions defined for the message. Nullable.
     * @returns a extension
     */
    get extensions(): Extension[] | undefined;
    /**
     * Gets the flag property value.
     * @returns a followupFlag
     */
    get flag(): FollowupFlag | undefined;
    /**
     * Gets the from property value.
     * @returns a recipient
     */
    get from(): Recipient | undefined;
    /**
     * Gets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
     * @returns a boolean
     */
    get hasAttachments(): boolean | undefined;
    /**
     * Gets the importance property value.
     * @returns a importance
     */
    get importance(): Importance | undefined;
    /**
     * Gets the inferenceClassification property value.
     * @returns a inferenceClassificationType
     */
    get inferenceClassification(): InferenceClassificationType | undefined;
    /**
     * Gets the internetMessageHeaders property value.
     * @returns a internetMessageHeader
     */
    get internetMessageHeaders(): InternetMessageHeader[] | undefined;
    /**
     * Gets the internetMessageId property value.
     * @returns a string
     */
    get internetMessageId(): string | undefined;
    /**
     * Gets the isDeliveryReceiptRequested property value.
     * @returns a boolean
     */
    get isDeliveryReceiptRequested(): boolean | undefined;
    /**
     * Gets the isDraft property value.
     * @returns a boolean
     */
    get isDraft(): boolean | undefined;
    /**
     * Gets the isRead property value.
     * @returns a boolean
     */
    get isRead(): boolean | undefined;
    /**
     * Gets the isReadReceiptRequested property value.
     * @returns a boolean
     */
    get isReadReceiptRequested(): boolean | undefined;
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    get multiValueExtendedProperties(): MultiValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the parentFolderId property value.
     * @returns a string
     */
    get parentFolderId(): string | undefined;
    /**
     * Gets the receivedDateTime property value.
     * @returns a Date
     */
    get receivedDateTime(): Date | undefined;
    /**
     * Gets the replyTo property value.
     * @returns a recipient
     */
    get replyTo(): Recipient[] | undefined;
    /**
     * Gets the sender property value.
     * @returns a recipient
     */
    get sender(): Recipient | undefined;
    /**
     * Gets the sentDateTime property value.
     * @returns a Date
     */
    get sentDateTime(): Date | undefined;
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    get singleValueExtendedProperties(): SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the subject property value.
     * @returns a string
     */
    get subject(): string | undefined;
    /**
     * Gets the toRecipients property value.
     * @returns a recipient
     */
    get toRecipients(): Recipient[] | undefined;
    /**
     * Gets the uniqueBody property value.
     * @returns a itemBody
     */
    get uniqueBody(): ItemBody | undefined;
    /**
     * Gets the webLink property value.
     * @returns a string
     */
    get webLink(): string | undefined;
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
     * Sets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
     * @param value Value to set for the attachments property.
     */
    set attachments(value: Attachment[] | undefined);
    /**
     * Sets the bccRecipients property value. The Bcc: recipients for the message.
     * @param value Value to set for the bccRecipients property.
     */
    set bccRecipients(value: Recipient[] | undefined);
    /**
     * Sets the body property value.
     * @param value Value to set for the body property.
     */
    set body(value: ItemBody | undefined);
    /**
     * Sets the bodyPreview property value. The first 255 characters of the message body. It is in text format.
     * @param value Value to set for the bodyPreview property.
     */
    set bodyPreview(value: string | undefined);
    /**
     * Sets the ccRecipients property value. The Cc: recipients for the message.
     * @param value Value to set for the ccRecipients property.
     */
    set ccRecipients(value: Recipient[] | undefined);
    /**
     * Sets the conversationId property value. The ID of the conversation the email belongs to.
     * @param value Value to set for the conversationId property.
     */
    set conversationId(value: string | undefined);
    /**
     * Sets the conversationIndex property value. Indicates the position of the message within the conversation.
     * @param value Value to set for the conversationIndex property.
     */
    set conversationIndex(value: string | undefined);
    /**
     * Sets the extensions property value. The collection of open extensions defined for the message. Nullable.
     * @param value Value to set for the extensions property.
     */
    set extensions(value: Extension[] | undefined);
    /**
     * Sets the flag property value.
     * @param value Value to set for the flag property.
     */
    set flag(value: FollowupFlag | undefined);
    /**
     * Sets the from property value.
     * @param value Value to set for the from property.
     */
    set from(value: Recipient | undefined);
    /**
     * Sets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
     * @param value Value to set for the hasAttachments property.
     */
    set hasAttachments(value: boolean | undefined);
    /**
     * Sets the importance property value.
     * @param value Value to set for the importance property.
     */
    set importance(value: Importance | undefined);
    /**
     * Sets the inferenceClassification property value.
     * @param value Value to set for the inferenceClassification property.
     */
    set inferenceClassification(value: InferenceClassificationType | undefined);
    /**
     * Sets the internetMessageHeaders property value.
     * @param value Value to set for the internetMessageHeaders property.
     */
    set internetMessageHeaders(value: InternetMessageHeader[] | undefined);
    /**
     * Sets the internetMessageId property value.
     * @param value Value to set for the internetMessageId property.
     */
    set internetMessageId(value: string | undefined);
    /**
     * Sets the isDeliveryReceiptRequested property value.
     * @param value Value to set for the isDeliveryReceiptRequested property.
     */
    set isDeliveryReceiptRequested(value: boolean | undefined);
    /**
     * Sets the isDraft property value.
     * @param value Value to set for the isDraft property.
     */
    set isDraft(value: boolean | undefined);
    /**
     * Sets the isRead property value.
     * @param value Value to set for the isRead property.
     */
    set isRead(value: boolean | undefined);
    /**
     * Sets the isReadReceiptRequested property value.
     * @param value Value to set for the isReadReceiptRequested property.
     */
    set isReadReceiptRequested(value: boolean | undefined);
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined);
    /**
     * Sets the parentFolderId property value.
     * @param value Value to set for the parentFolderId property.
     */
    set parentFolderId(value: string | undefined);
    /**
     * Sets the receivedDateTime property value.
     * @param value Value to set for the receivedDateTime property.
     */
    set receivedDateTime(value: Date | undefined);
    /**
     * Sets the replyTo property value.
     * @param value Value to set for the replyTo property.
     */
    set replyTo(value: Recipient[] | undefined);
    /**
     * Sets the sender property value.
     * @param value Value to set for the sender property.
     */
    set sender(value: Recipient | undefined);
    /**
     * Sets the sentDateTime property value.
     * @param value Value to set for the sentDateTime property.
     */
    set sentDateTime(value: Date | undefined);
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined);
    /**
     * Sets the subject property value.
     * @param value Value to set for the subject property.
     */
    set subject(value: string | undefined);
    /**
     * Sets the toRecipients property value.
     * @param value Value to set for the toRecipients property.
     */
    set toRecipients(value: Recipient[] | undefined);
    /**
     * Sets the uniqueBody property value.
     * @param value Value to set for the uniqueBody property.
     */
    set uniqueBody(value: ItemBody | undefined);
    /**
     * Sets the webLink property value.
     * @param value Value to set for the webLink property.
     */
    set webLink(value: string | undefined);
}
//# sourceMappingURL=message.d.ts.map