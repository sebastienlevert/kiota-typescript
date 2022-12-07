import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoFollowupFlag} from './deserializeIntoFollowupFlag';
import {deserializeIntoInternetMessageHeader} from './deserializeIntoInternetMessageHeader';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {deserializeIntoMention} from './deserializeIntoMention';
import {deserializeIntoMentionsPreview} from './deserializeIntoMentionsPreview';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoOutlookItem} from './deserializeIntoOutlookItem';
import {deserializeIntoRecipient} from './deserializeIntoRecipient';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {Importance} from './importance';
import {Message} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessage(message: Message | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOutlookItem(message),
        "attachments": n => { message.attachments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttachment) as any ; },
        "bccRecipients": n => { message.bccRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "body": n => { message.body = n.getObject(deserializeIntoItemBody) as any ; },
        "bodyPreview": n => { message.bodyPreview = n.getStringValue() as any ; },
        "ccRecipients": n => { message.ccRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "conversationId": n => { message.conversationId = n.getStringValue() as any ; },
        "conversationIndex": n => { message.conversationIndex = n.getStringValue() as any ; },
        "extensions": n => { message.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "flag": n => { message.flag = n.getObject(deserializeIntoFollowupFlag) as any ; },
        "from": n => { message.from = n.getObject(deserializeIntoRecipient) as any ; },
        "hasAttachments": n => { message.hasAttachments = n.getBooleanValue() as any ; },
        "importance": n => { message.importance = n.getEnumValue<Importance>(Importance) as any ; },
        "inferenceClassification": n => { message.inferenceClassification = n.getEnumValue<InferenceClassificationType>(InferenceClassificationType) as any ; },
        "internetMessageHeaders": n => { message.internetMessageHeaders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInternetMessageHeader) as any ; },
        "internetMessageId": n => { message.internetMessageId = n.getStringValue() as any ; },
        "isDeliveryReceiptRequested": n => { message.isDeliveryReceiptRequested = n.getBooleanValue() as any ; },
        "isDraft": n => { message.isDraft = n.getBooleanValue() as any ; },
        "isRead": n => { message.isRead = n.getBooleanValue() as any ; },
        "isReadReceiptRequested": n => { message.isReadReceiptRequested = n.getBooleanValue() as any ; },
        "mentions": n => { message.mentions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMention) as any ; },
        "mentionsPreview": n => { message.mentionsPreview = n.getObject(deserializeIntoMentionsPreview) as any ; },
        "multiValueExtendedProperties": n => { message.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "parentFolderId": n => { message.parentFolderId = n.getStringValue() as any ; },
        "receivedDateTime": n => { message.receivedDateTime = n.getDateValue() as any ; },
        "replyTo": n => { message.replyTo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "sender": n => { message.sender = n.getObject(deserializeIntoRecipient) as any ; },
        "sentDateTime": n => { message.sentDateTime = n.getDateValue() as any ; },
        "singleValueExtendedProperties": n => { message.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "subject": n => { message.subject = n.getStringValue() as any ; },
        "toRecipients": n => { message.toRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
        "uniqueBody": n => { message.uniqueBody = n.getObject(deserializeIntoItemBody) as any ; },
        "unsubscribeData": n => { message.unsubscribeData = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "unsubscribeEnabled": n => { message.unsubscribeEnabled = n.getBooleanValue() as any ; },
        "webLink": n => { message.webLink = n.getStringValue() as any ; },
    }
}
