import {ChatMessageImportance} from './chatMessageImportance';
import {ChatMessageType} from './chatMessageType';
import {ChatMessage} from './index';
import {serializeChannelIdentity} from './serializeChannelIdentity';
import {serializeChatMessageAttachment} from './serializeChatMessageAttachment';
import {serializeChatMessageFromIdentitySet} from './serializeChatMessageFromIdentitySet';
import {serializeChatMessageHistoryItem} from './serializeChatMessageHistoryItem';
import {serializeChatMessageHostedContent} from './serializeChatMessageHostedContent';
import {serializeChatMessageMention} from './serializeChatMessageMention';
import {serializeChatMessagePolicyViolation} from './serializeChatMessagePolicyViolation';
import {serializeChatMessageReaction} from './serializeChatMessageReaction';
import {serializeEntity} from './serializeEntity';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeItemBody} from './serializeItemBody';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessage(writer: SerializationWriter, chatMessage: ChatMessage | undefined = {}) : void {
        serializeEntity(writer, chatMessage)
            writer.writeCollectionOfObjectValuesFromMethod("attachments", chatMessage.attachments as any, serializeChatMessageAttachment);
            writer.writeObjectValueFromMethod("body", chatMessage.body as any, serializeItemBody);
            writer.writeObjectValueFromMethod("channelIdentity", chatMessage.channelIdentity as any, serializeChannelIdentity);
            writer.writeStringValue("chatId", chatMessage.chatId);
            writer.writeDateValue("createdDateTime", chatMessage.createdDateTime);
            writer.writeDateValue("deletedDateTime", chatMessage.deletedDateTime);
            writer.writeStringValue("etag", chatMessage.etag);
            writer.writeObjectValueFromMethod("eventDetail", chatMessage.eventDetail as any, serializeEventMessageDetail);
            writer.writeObjectValueFromMethod("from", chatMessage.from as any, serializeChatMessageFromIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("hostedContents", chatMessage.hostedContents as any, serializeChatMessageHostedContent);
            writer.writeEnumValue<ChatMessageImportance>("importance", chatMessage.importance);
            writer.writeDateValue("lastEditedDateTime", chatMessage.lastEditedDateTime);
            writer.writeDateValue("lastModifiedDateTime", chatMessage.lastModifiedDateTime);
            writer.writeStringValue("locale", chatMessage.locale);
            writer.writeCollectionOfObjectValuesFromMethod("mentions", chatMessage.mentions as any, serializeChatMessageMention);
            writer.writeCollectionOfObjectValuesFromMethod("messageHistory", chatMessage.messageHistory as any, serializeChatMessageHistoryItem);
            writer.writeEnumValue<ChatMessageType>("messageType", chatMessage.messageType);
            writer.writeObjectValueFromMethod("onBehalfOf", chatMessage.onBehalfOf as any, serializeChatMessageFromIdentitySet);
            writer.writeObjectValueFromMethod("policyViolation", chatMessage.policyViolation as any, serializeChatMessagePolicyViolation);
            writer.writeCollectionOfObjectValuesFromMethod("reactions", chatMessage.reactions as any, serializeChatMessageReaction);
            writer.writeCollectionOfObjectValuesFromMethod("replies", chatMessage.replies as any, serializeChatMessage);
            writer.writeStringValue("replyToId", chatMessage.replyToId);
            writer.writeStringValue("subject", chatMessage.subject);
            writer.writeStringValue("summary", chatMessage.summary);
            writer.writeStringValue("webUrl", chatMessage.webUrl);
}
