import {Importance} from './importance';
import {Message} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {serializeAttachment} from './serializeAttachment';
import {serializeExtension} from './serializeExtension';
import {serializeFollowupFlag} from './serializeFollowupFlag';
import {serializeInternetMessageHeader} from './serializeInternetMessageHeader';
import {serializeItemBody} from './serializeItemBody';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeOutlookItem} from './serializeOutlookItem';
import {serializeRecipient} from './serializeRecipient';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessage(writer: SerializationWriter, message: Message | undefined = {}) : void {
        serializeOutlookItem(writer, message)
            writer.writeCollectionOfObjectValues("attachments", message.attachments as any, serializeAttachment);
            writer.writeCollectionOfObjectValues("bccRecipients", message.bccRecipients as any, serializeRecipient);
            writer.writeObjectValue("body", message.body as any, serializeItemBody);
            writer.writeStringValue("bodyPreview", message.bodyPreview);
            writer.writeCollectionOfObjectValues("ccRecipients", message.ccRecipients as any, serializeRecipient);
            writer.writeStringValue("conversationId", message.conversationId);
            writer.writeStringValue("conversationIndex", message.conversationIndex);
            writer.writeCollectionOfObjectValues("extensions", message.extensions as any, serializeExtension);
            writer.writeObjectValue("flag", message.flag as any, serializeFollowupFlag);
            writer.writeObjectValue("from", message.from as any, serializeRecipient);
            writer.writeBooleanValue("hasAttachments", message.hasAttachments);
            writer.writeEnumValue<Importance>("importance", message.importance);
            writer.writeEnumValue<InferenceClassificationType>("inferenceClassification", message.inferenceClassification);
            writer.writeCollectionOfObjectValues("internetMessageHeaders", message.internetMessageHeaders as any, serializeInternetMessageHeader);
            writer.writeStringValue("internetMessageId", message.internetMessageId);
            writer.writeBooleanValue("isDeliveryReceiptRequested", message.isDeliveryReceiptRequested);
            writer.writeBooleanValue("isDraft", message.isDraft);
            writer.writeBooleanValue("isRead", message.isRead);
            writer.writeBooleanValue("isReadReceiptRequested", message.isReadReceiptRequested);
            writer.writeCollectionOfObjectValues("multiValueExtendedProperties", message.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("parentFolderId", message.parentFolderId);
            writer.writeDateValue("receivedDateTime", message.receivedDateTime);
            writer.writeCollectionOfObjectValues("replyTo", message.replyTo as any, serializeRecipient);
            writer.writeObjectValue("sender", message.sender as any, serializeRecipient);
            writer.writeDateValue("sentDateTime", message.sentDateTime);
            writer.writeCollectionOfObjectValues("singleValueExtendedProperties", message.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
            writer.writeStringValue("subject", message.subject);
            writer.writeCollectionOfObjectValues("toRecipients", message.toRecipients as any, serializeRecipient);
            writer.writeObjectValue("uniqueBody", message.uniqueBody as any, serializeItemBody);
            writer.writeStringValue("webLink", message.webLink);
}
