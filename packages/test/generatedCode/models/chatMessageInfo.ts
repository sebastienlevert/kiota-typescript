import {ChatMessageType} from './chatMessageType';
import {ChatMessageFromIdentitySet, Entity, EventMessageDetail, ItemBody} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageInfo extends Entity, Partial<Parsable> {
    /** The body property */
    body?: ItemBody;
    /** Date time object representing the time at which message was created. */
    createdDateTime?: Date;
    /** The eventDetail property */
    eventDetail?: EventMessageDetail;
    /** The from property */
    from?: ChatMessageFromIdentitySet;
    /** If set to true, the original message has been deleted. */
    isDeleted?: boolean;
    /** The messageType property */
    messageType?: ChatMessageType;
}
