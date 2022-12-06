import {ChatType} from './chatType';
import {ChatMessage, ChatMessageInfo, ChatViewpoint, ConversationMember, Entity, PinnedChatMessageInfo, TeamsAppInstallation, TeamsTab, TeamworkOnlineMeetingInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Chat extends Entity, Partial<Parsable> {
    /** The chatType property */
    chatType?: ChatType;
    /** Date and time at which the chat was created. Read-only. */
    createdDateTime?: Date;
    /** A collection of all the apps in the chat. Nullable. */
    installedApps?: TeamsAppInstallation[];
    /** Preview of the last message sent in the chat. Null if no messages have been sent in the chat. Currently, only the list chats operation supports this property. */
    lastMessagePreview?: ChatMessageInfo;
    /** Date and time at which the chat was renamed or list of members were last changed. Read-only. */
    lastUpdatedDateTime?: Date;
    /** A collection of all the members in the chat. Nullable. */
    members?: ConversationMember[];
    /** A collection of all the messages in the chat. Nullable. */
    messages?: ChatMessage[];
    /** Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only. */
    onlineMeetingInfo?: TeamworkOnlineMeetingInfo;
    /** A collection of all the pinned messages in the chat. Nullable. */
    pinnedMessages?: PinnedChatMessageInfo[];
    /** A collection of all the tabs in the chat. Nullable. */
    tabs?: TeamsTab[];
    /** The identifier of the tenant in which the chat was created. Read-only. */
    tenantId?: string;
    /** (Optional) Subject or topic for the chat. Only available for group chats. */
    topic?: string;
    /** Represents caller-specific information about the chat, such as last message read date and time. This property is populated only when the request is made in a delegated context. */
    viewpoint?: ChatViewpoint;
    /** The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only. */
    webUrl?: string;
}
