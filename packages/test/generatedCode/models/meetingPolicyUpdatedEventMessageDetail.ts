import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingPolicyUpdatedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** Represents whether the meeting chat is enabled or not. */
    meetingChatEnabled?: boolean;
    /** Unique identifier of the meeting chat. */
    meetingChatId?: string;
}
