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

export function serializeMessage(writer: SerializationWriter, message: Message | undefined = {}) : void {
        serializeOutlookItemInterface(message)
            writer.writeCollectionOfObjectValues<Attachment>("attachments", message.attachments);
            writer.writeCollectionOfObjectValues<Recipient>("bccRecipients", message.bccRecipients);
            writer.writeObjectValue<ItemBody>("body", message.body);
            writer.writeStringValue("bodyPreview", message.bodyPreview);
            writer.writeCollectionOfObjectValues<Recipient>("ccRecipients", message.ccRecipients);
            writer.writeStringValue("conversationId", message.conversationId);
            writer.writeStringValue("conversationIndex", message.conversationIndex);
            writer.writeCollectionOfObjectValues<Extension>("extensions", message.extensions);
            writer.writeObjectValue<FollowupFlag>("flag", message.flag);
            writer.writeObjectValue<Recipient>("from", message.from);
            writer.writeBooleanValue("hasAttachments", message.hasAttachments);
            writer.writeEnumValue<Importance>("importance", message.importance);
            writer.writeEnumValue<InferenceClassificationType>("inferenceClassification", message.inferenceClassification);
            writer.writeCollectionOfObjectValues<InternetMessageHeader>("internetMessageHeaders", message.internetMessageHeaders);
            writer.writeStringValue("internetMessageId", message.internetMessageId);
            writer.writeBooleanValue("isDeliveryReceiptRequested", message.isDeliveryReceiptRequested);
            writer.writeBooleanValue("isDraft", message.isDraft);
            writer.writeBooleanValue("isRead", message.isRead);
            writer.writeBooleanValue("isReadReceiptRequested", message.isReadReceiptRequested);
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", message.multiValueExtendedProperties);
            writer.writeStringValue("parentFolderId", message.parentFolderId);
            writer.writeDateValue("receivedDateTime", message.receivedDateTime);
            writer.writeCollectionOfObjectValues<Recipient>("replyTo", message.replyTo);
            writer.writeObjectValue<Recipient>("sender", message.sender);
            writer.writeDateValue("sentDateTime", message.sentDateTime);
            writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", message.singleValueExtendedProperties);
            writer.writeStringValue("subject", message.subject);
            writer.writeCollectionOfObjectValues<Recipient>("toRecipients", message.toRecipients);
            writer.writeObjectValue<ItemBody>("uniqueBody", message.uniqueBody);
            writer.writeStringValue("webLink", message.webLink);
}
