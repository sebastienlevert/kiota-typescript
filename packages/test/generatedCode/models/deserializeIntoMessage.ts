import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoFollowupFlag} from './deserializeIntoFollowupFlag';
import {deserializeIntoInternetMessageHeader} from './deserializeIntoInternetMessageHeader';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
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
        "attachments": n => { message.attachments = n.getCollectionOfObjectValues(deserializeIntoAttachment) as any ; },
        "bccRecipients": n => { message.bccRecipients = n.getCollectionOfObjectValues(deserializeIntoRecipient) as any ; },
        "body": n => { message.body = n.getObjectValue(deserializeIntoItemBody) as any ; },
        "bodyPreview": n => { message.bodyPreview = n.getStringValue() as any ; },
        "ccRecipients": n => { message.ccRecipients = n.getCollectionOfObjectValues(deserializeIntoRecipient) as any ; },
        "conversationId": n => { message.conversationId = n.getStringValue() as any ; },
        "conversationIndex": n => { message.conversationIndex = n.getStringValue() as any ; },
        "extensions": n => { message.extensions = n.getCollectionOfObjectValues(deserializeIntoExtension) as any ; },
        "flag": n => { message.flag = n.getObjectValue(deserializeIntoFollowupFlag) as any ; },
        "from": n => { message.from = n.getObjectValue(deserializeIntoRecipient) as any ; },
        "hasAttachments": n => { message.hasAttachments = n.getBooleanValue() as any ; },
        "importance": n => { message.importance = n.getEnumValue<Importance>(Importance) as any ; },
        "inferenceClassification": n => { message.inferenceClassification = n.getEnumValue<InferenceClassificationType>(InferenceClassificationType) as any ; },
        "internetMessageHeaders": n => { message.internetMessageHeaders = n.getCollectionOfObjectValues(deserializeIntoInternetMessageHeader) as any ; },
        "internetMessageId": n => { message.internetMessageId = n.getStringValue() as any ; },
        "isDeliveryReceiptRequested": n => { message.isDeliveryReceiptRequested = n.getBooleanValue() as any ; },
        "isDraft": n => { message.isDraft = n.getBooleanValue() as any ; },
        "isRead": n => { message.isRead = n.getBooleanValue() as any ; },
        "isReadReceiptRequested": n => { message.isReadReceiptRequested = n.getBooleanValue() as any ; },
        "multiValueExtendedProperties": n => { message.multiValueExtendedProperties = n.getCollectionOfObjectValues(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "parentFolderId": n => { message.parentFolderId = n.getStringValue() as any ; },
        "receivedDateTime": n => { message.receivedDateTime = n.getDateValue() as any ; },
        "replyTo": n => { message.replyTo = n.getCollectionOfObjectValues(deserializeIntoRecipient) as any ; },
        "sender": n => { message.sender = n.getObjectValue(deserializeIntoRecipient) as any ; },
        "sentDateTime": n => { message.sentDateTime = n.getDateValue() as any ; },
        "singleValueExtendedProperties": n => { message.singleValueExtendedProperties = n.getCollectionOfObjectValues(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "subject": n => { message.subject = n.getStringValue() as any ; },
        "toRecipients": n => { message.toRecipients = n.getCollectionOfObjectValues(deserializeIntoRecipient) as any ; },
        "uniqueBody": n => { message.uniqueBody = n.getObjectValue(deserializeIntoItemBody) as any ; },
        "webLink": n => { message.webLink = n.getStringValue() as any ; },
    }
}
