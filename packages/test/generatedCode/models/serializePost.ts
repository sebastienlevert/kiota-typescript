import {Importance} from './importance';
import {Post} from './index';
import {serializeAttachment} from './serializeAttachment';
import {serializeExtension} from './serializeExtension';
import {serializeItemBody} from './serializeItemBody';
import {serializeMention} from './serializeMention';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeOutlookItem} from './serializeOutlookItem';
import {serializeRecipient} from './serializeRecipient';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePost(writer: SerializationWriter, post: Post | undefined = {}) : void {
        serializeOutlookItem(writer, post)
            writer.writeCollectionOfObjectValuesFromMethod("attachments", post.attachments as any, serializeAttachment);
            writer.writeObjectValueFromMethod("body", post.body as any, serializeItemBody);
            writer.writeStringValue("conversationId", post.conversationId);
            writer.writeStringValue("conversationThreadId", post.conversationThreadId);
            writer.writeCollectionOfObjectValuesFromMethod("extensions", post.extensions as any, serializeExtension);
            writer.writeObjectValueFromMethod("from", post.from as any, serializeRecipient);
            writer.writeBooleanValue("hasAttachments", post.hasAttachments);
            writer.writeEnumValue<Importance>("importance", post.importance);
            writer.writeObjectValueFromMethod("inReplyTo", post.inReplyTo as any, serializePost);
            writer.writeCollectionOfObjectValuesFromMethod("mentions", post.mentions as any, serializeMention);
            writer.writeCollectionOfObjectValuesFromMethod("multiValueExtendedProperties", post.multiValueExtendedProperties as any, serializeMultiValueLegacyExtendedProperty);
            writer.writeCollectionOfObjectValuesFromMethod("newParticipants", post.newParticipants as any, serializeRecipient);
            writer.writeDateValue("receivedDateTime", post.receivedDateTime);
            writer.writeObjectValueFromMethod("sender", post.sender as any, serializeRecipient);
            writer.writeCollectionOfObjectValuesFromMethod("singleValueExtendedProperties", post.singleValueExtendedProperties as any, serializeSingleValueLegacyExtendedProperty);
}
