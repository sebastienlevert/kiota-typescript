import {ConversationThread} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePost} from './serializePost';
import {serializeRecipient} from './serializeRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationThread(writer: SerializationWriter, conversationThread: ConversationThread | undefined = {}) : void {
        serializeEntity(writer, conversationThread)
            writer.writeCollectionOfObjectValuesFromMethod("ccRecipients", conversationThread.ccRecipients as any, serializeRecipient);
            writer.writeBooleanValue("hasAttachments", conversationThread.hasAttachments);
            writer.writeBooleanValue("isLocked", conversationThread.isLocked);
            writer.writeDateValue("lastDeliveredDateTime", conversationThread.lastDeliveredDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("posts", conversationThread.posts as any, serializePost);
            writer.writeStringValue("preview", conversationThread.preview);
            writer.writeStringValue("topic", conversationThread.topic);
            writer.writeCollectionOfObjectValuesFromMethod("toRecipients", conversationThread.toRecipients as any, serializeRecipient);
            writer.writeCollectionOfPrimitiveValues<string>("uniqueSenders", conversationThread.uniqueSenders);
}
