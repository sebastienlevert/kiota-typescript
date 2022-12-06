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
            writer.writeCollectionOfObjectValuesFromMethod("attachments", message.attachments as any, serializeAttachment);
            writer.writeCollectionOfObjectValuesFromMethod("bccRecipients", message.bccRecipients as any, serializeRecipient);
            writer.writeObjectValueFromMethod("body", message.body as any, serializeItemBody);
            writer.writeStringValue("bodyPreview", message.bodyPreview);
            writer.writeCollectionOfObjectValuesFromMethod("ccRecipients", message.ccRecipients as any, serializeRecipient);
            writer.writeStringValue("conversationId", message.conversationId);
            writer.writeStringValue("conversationIndex", message.conversationIndex);
            writer.writeCollectionOfObjectValuesFromMethod("extensions", message.extensions as any, serializeExtension);
            writer.writeObjectValueFromMethod("flag", message.flag as any, serializeFollowupFlag);
            writer.writeObjectValueFromMethod("from", message.from as any, serializeRecipient);
            writer.writeBooleanValue("hasAttachments", message.hasAttachments);
            writer.writeEnumValue<Importance>("importance", message.importance);
            writer.writeEnumValue<InferenceClassificationType>("inferenceClassification", message.inferenceClassification);
            writer.writeCollectionOfObjectValuesFromMethod("internetMessageHeaders", message.internetMessageHeaders as any, serializeInternetMessageHeader);
            writer.writeStringValue("internetMessageId", message.internetMessageId);
            writer.writeBooleanValue("isDeliveryReceiptRequested", message.isDeliveryReceiptRequested);
            writer.writeBooleanValue("isDraft", message.isDraft);
            writer.writeBooleanValue("isRead", message.isRead);
            writer.writeBooleanValue("isReadReceiptRequested", message.isReadReceiptRequested);
            writer.writeCollectionOfObjectValuesFromMethod("multiValueExtendedProperties", message.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeStringValue("parentFolderId", message.parentFolderId);
            writer.writeDateValue("receivedDateTime", message.receivedDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("replyTo", message.replyTo as any, serializeRecipient);
            writer.writeObjectValueFromMethod("sender", message.sender as any, serializeRecipient);
            writer.writeDateValue("sentDateTime", message.sentDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("singleValueExtendedProperties", message.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
            writer.writeStringValue("subject", message.subject);
            writer.writeCollectionOfObjectValuesFromMethod("toRecipients", message.toRecipients as any, serializeRecipient);
            writer.writeObjectValueFromMethod("uniqueBody", message.uniqueBody as any, serializeItemBody);
            writer.writeStringValue("webLink", message.webLink);
}
