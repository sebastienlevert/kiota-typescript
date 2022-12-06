import {ChatMessageType} from './chatMessageType';
import {ChatMessageFromIdentitySet, Entity, EventMessageDetail, ItemBody} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageInfo extends Entity, Partial<Parsable> {
    /** Body of the chatMessage. This will still contain markers for @mentions and attachments even though the object does not return @mentions and attachments. */
    body?: ItemBody;
    /** Date time object representing the time at which message was created. */
    createdDateTime?: Date;
    /** Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, members were added, and so on. For event messages, the messageType property will be set to systemEventMessage. */
    eventDetail?: EventMessageDetail;
    /** Information about the sender of the message. */
    from?: ChatMessageFromIdentitySet;
    /** If set to true, the original message has been deleted. */
    isDeleted?: boolean;
    /** The messageType property */
    messageType?: ChatMessageType;
}
