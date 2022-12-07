import {ChatMessageImportance} from './chatMessageImportance';
import {ChatMessageType} from './chatMessageType';
import {deserializeIntoChannelIdentity} from './deserializeIntoChannelIdentity';
import {deserializeIntoChatMessageAttachment} from './deserializeIntoChatMessageAttachment';
import {deserializeIntoChatMessageFromIdentitySet} from './deserializeIntoChatMessageFromIdentitySet';
import {deserializeIntoChatMessageHistoryItem} from './deserializeIntoChatMessageHistoryItem';
import {deserializeIntoChatMessageHostedContent} from './deserializeIntoChatMessageHostedContent';
import {deserializeIntoChatMessageMention} from './deserializeIntoChatMessageMention';
import {deserializeIntoChatMessagePolicyViolation} from './deserializeIntoChatMessagePolicyViolation';
import {deserializeIntoChatMessageReaction} from './deserializeIntoChatMessageReaction';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoItemBody} from './deserializeIntoItemBody';
import {ChatMessage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatMessage(chatMessage: ChatMessage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(chatMessage),
        "attachments": n => { chatMessage.attachments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageAttachment) as any ; },
        "body": n => { chatMessage.body = n.getObject(deserializeIntoItemBody) as any ; },
        "channelIdentity": n => { chatMessage.channelIdentity = n.getObject(deserializeIntoChannelIdentity) as any ; },
        "chatId": n => { chatMessage.chatId = n.getStringValue() as any ; },
        "createdDateTime": n => { chatMessage.createdDateTime = n.getDateValue() as any ; },
        "deletedDateTime": n => { chatMessage.deletedDateTime = n.getDateValue() as any ; },
        "etag": n => { chatMessage.etag = n.getStringValue() as any ; },
        "eventDetail": n => { chatMessage.eventDetail = n.getObject(deserializeIntoEventMessageDetail) as any ; },
        "from": n => { chatMessage.from = n.getObject(deserializeIntoChatMessageFromIdentitySet) as any ; },
        "hostedContents": n => { chatMessage.hostedContents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageHostedContent) as any ; },
        "importance": n => { chatMessage.importance = n.getEnumValue<ChatMessageImportance>(ChatMessageImportance) as any ; },
        "lastEditedDateTime": n => { chatMessage.lastEditedDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { chatMessage.lastModifiedDateTime = n.getDateValue() as any ; },
        "locale": n => { chatMessage.locale = n.getStringValue() as any ; },
        "mentions": n => { chatMessage.mentions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageMention) as any ; },
        "messageHistory": n => { chatMessage.messageHistory = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageHistoryItem) as any ; },
        "messageType": n => { chatMessage.messageType = n.getEnumValue<ChatMessageType>(ChatMessageType) as any ; },
        "onBehalfOf": n => { chatMessage.onBehalfOf = n.getObject(deserializeIntoChatMessageFromIdentitySet) as any ; },
        "policyViolation": n => { chatMessage.policyViolation = n.getObject(deserializeIntoChatMessagePolicyViolation) as any ; },
        "reactions": n => { chatMessage.reactions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessageReaction) as any ; },
        "replies": n => { chatMessage.replies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessage) as any ; },
        "replyToId": n => { chatMessage.replyToId = n.getStringValue() as any ; },
        "subject": n => { chatMessage.subject = n.getStringValue() as any ; },
        "summary": n => { chatMessage.summary = n.getStringValue() as any ; },
        "webUrl": n => { chatMessage.webUrl = n.getStringValue() as any ; },
    }
}
