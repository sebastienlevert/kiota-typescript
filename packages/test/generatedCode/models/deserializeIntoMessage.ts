import {Attachment} from './attachment';
import {Extension} from './extension';
import {FollowupFlag} from './followupFlag';
import {Importance} from './importance';
import {Attachment, Extension, FollowupFlag, InternetMessageHeader, ItemBody, Message, MultiValueLegacyExtendedProperty, Recipient, SingleValueLegacyExtendedProperty} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {InternetMessageHeader} from './internetMessageHeader';
import {ItemBody} from './itemBody';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OutlookItem} from './outlookItem';
import {Recipient} from './recipient';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessage(message: Message | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItemInterface(message),
        "attachments": n => { message.attachments = n.getCollectionOfObjectValuesFromMethod<Attachment>(deserializeIntoAttachment); },
        "bccRecipients": n => { message.bccRecipients = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "body": n => { message.body = n.deserializeIntoItemBodyInterface(); },
        "bodyPreview": n => { message.bodyPreview = n.getStringValue(); },
        "ccRecipients": n => { message.ccRecipients = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "conversationId": n => { message.conversationId = n.getStringValue(); },
        "conversationIndex": n => { message.conversationIndex = n.getStringValue(); },
        "extensions": n => { message.extensions = n.getCollectionOfObjectValuesFromMethod<Extension>(deserializeIntoExtension); },
        "flag": n => { message.flag = n.deserializeIntoFollowupFlagInterface(); },
        "from": n => { message.from = n.deserializeIntoRecipientInterface(); },
        "hasAttachments": n => { message.hasAttachments = n.getBooleanValue(); },
        "importance": n => { message.importance = n.getEnumValue<Importance>(Importance); },
        "inferenceClassification": n => { message.inferenceClassification = n.getEnumValue<InferenceClassificationType>(InferenceClassificationType); },
        "internetMessageHeaders": n => { message.internetMessageHeaders = n.getCollectionOfObjectValuesFromMethod<InternetMessageHeader>(deserializeIntoInternetMessageHeader); },
        "internetMessageId": n => { message.internetMessageId = n.getStringValue(); },
        "isDeliveryReceiptRequested": n => { message.isDeliveryReceiptRequested = n.getBooleanValue(); },
        "isDraft": n => { message.isDraft = n.getBooleanValue(); },
        "isRead": n => { message.isRead = n.getBooleanValue(); },
        "isReadReceiptRequested": n => { message.isReadReceiptRequested = n.getBooleanValue(); },
        "multiValueExtendedProperties": n => { message.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod<MultiValueLegacyExtendedProperty>(deserializeIntoMultiValueLegacyExtendedProperty); },
        "parentFolderId": n => { message.parentFolderId = n.getStringValue(); },
        "receivedDateTime": n => { message.receivedDateTime = n.getDateValue(); },
        "replyTo": n => { message.replyTo = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "sender": n => { message.sender = n.deserializeIntoRecipientInterface(); },
        "sentDateTime": n => { message.sentDateTime = n.getDateValue(); },
        "singleValueExtendedProperties": n => { message.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod<SingleValueLegacyExtendedProperty>(deserializeIntoSingleValueLegacyExtendedProperty); },
        "subject": n => { message.subject = n.getStringValue(); },
        "toRecipients": n => { message.toRecipients = n.getCollectionOfObjectValuesFromMethod<Recipient>(deserializeIntoRecipient); },
        "uniqueBody": n => { message.uniqueBody = n.deserializeIntoItemBodyInterface(); },
        "webLink": n => { message.webLink = n.getStringValue(); },
    }
}
