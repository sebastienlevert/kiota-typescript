import {ChatMessageImportance} from './chatMessageImportance';
import {ChatMessageType} from './chatMessageType';
import {ChannelIdentity, ChatMessageAttachment, ChatMessageFromIdentitySet, ChatMessageHistoryItem, ChatMessageHostedContent, ChatMessageMention, ChatMessagePolicyViolation, ChatMessageReaction, Entity, EventMessageDetail, ItemBody} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessage extends Entity, Partial<Parsable> {
    /** References to attached objects like files, tabs, meetings etc. */
    attachments?: ChatMessageAttachment[];
    /** The body property */
    body?: ItemBody;
    /** The channelIdentity property */
    channelIdentity?: ChannelIdentity;
    /** If the message was sent in a chat, represents the identity of the chat. */
    chatId?: string;
    /** Timestamp of when the chat message was created. */
    createdDateTime?: Date;
    /** Read only. Timestamp at which the chat message was deleted, or null if not deleted. */
    deletedDateTime?: Date;
    /** Read-only. Version number of the chat message. */
    etag?: string;
    /** The eventDetail property */
    eventDetail?: EventMessageDetail;
    /** The from property */
    from?: ChatMessageFromIdentitySet;
    /** Content in a message hosted by Microsoft Teams - for example, images or code snippets. */
    hostedContents?: ChatMessageHostedContent[];
    /** The importance property */
    importance?: ChatMessageImportance;
    /** Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null. */
    lastEditedDateTime?: Date;
    /** Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed. */
    lastModifiedDateTime?: Date;
    /** Locale of the chat message set by the client. Always set to en-us. */
    locale?: string;
    /** List of entities mentioned in the chat message. Supported entities are: user, bot, team, channel, and tag. */
    mentions?: ChatMessageMention[];
    /** The messageHistory property */
    messageHistory?: ChatMessageHistoryItem[];
    /** The messageType property */
    messageType?: ChatMessageType;
    /** The onBehalfOf property */
    onBehalfOf?: ChatMessageFromIdentitySet;
    /** The policyViolation property */
    policyViolation?: ChatMessagePolicyViolation;
    /** Reactions for this chat message (for example, Like). */
    reactions?: ChatMessageReaction[];
    /** Replies for a specified message. Supports $expand for channel messages. */
    replies?: ChatMessage[];
    /** Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.) */
    replyToId?: string;
    /** The subject of the chat message, in plaintext. */
    subject?: string;
    /** Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat. */
    summary?: string;
    /** Read-only. Link to the message in Microsoft Teams. */
    webUrl?: string;
}
