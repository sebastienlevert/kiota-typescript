import {Importance} from './importance';
import {Attachment, Extension, FollowupFlag, InternetMessageHeader, ItemBody, Mention, MentionsPreview, MultiValueLegacyExtendedProperty, OutlookItem, Recipient, SingleValueLegacyExtendedProperty} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Message extends OutlookItem, Partial<Parsable> {
    /** The fileAttachment and itemAttachment attachments for the message. */
    attachments?: Attachment[];
    /** The Bcc: recipients for the message. */
    bccRecipients?: Recipient[];
    /** The body property */
    body?: ItemBody;
    /** The first 255 characters of the message body. It is in text format. If the message contains instances of mention, this property would contain a concatenation of these mentions as well. */
    bodyPreview?: string;
    /** The Cc: recipients for the message. */
    ccRecipients?: Recipient[];
    /** The ID of the conversation the email belongs to. */
    conversationId?: string;
    /** Indicates the position of the message within the conversation. */
    conversationIndex?: string;
    /** The collection of open extensions defined for the message. Nullable. */
    extensions?: Extension[];
    /** The flag property */
    flag?: FollowupFlag;
    /** The from property */
    from?: Recipient;
    /** Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>. */
    hasAttachments?: boolean;
    /** The importance property */
    importance?: Importance;
    /** The inferenceClassification property */
    inferenceClassification?: InferenceClassificationType;
    /** The internetMessageHeaders property */
    internetMessageHeaders?: InternetMessageHeader[];
    /** The internetMessageId property */
    internetMessageId?: string;
    /** The isDeliveryReceiptRequested property */
    isDeliveryReceiptRequested?: boolean;
    /** The isDraft property */
    isDraft?: boolean;
    /** The isRead property */
    isRead?: boolean;
    /** The isReadReceiptRequested property */
    isReadReceiptRequested?: boolean;
    /** A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property. */
    mentions?: Mention[];
    /** The mentionsPreview property */
    mentionsPreview?: MentionsPreview;
    /** The collection of multi-value extended properties defined for the message. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The parentFolderId property */
    parentFolderId?: string;
    /** The receivedDateTime property */
    receivedDateTime?: Date;
    /** The replyTo property */
    replyTo?: Recipient[];
    /** The sender property */
    sender?: Recipient;
    /** The sentDateTime property */
    sentDateTime?: Date;
    /** The collection of single-value extended properties defined for the message. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    /** The subject property */
    subject?: string;
    /** The toRecipients property */
    toRecipients?: Recipient[];
    /** The uniqueBody property */
    uniqueBody?: ItemBody;
    /** The unsubscribeData property */
    unsubscribeData?: string[];
    /** The unsubscribeEnabled property */
    unsubscribeEnabled?: boolean;
    /** The webLink property */
    webLink?: string;
}
