import {CallParticipantInfo, EventMessageDetail, IdentitySet} from './index';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface CallEndedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Duration of the call. */
    callDuration?: Duration;
    /** Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue. */
    callEventType?: TeamworkCallEventType;
    /** Unique identifier of the call. */
    callId?: string;
    /** List of call participants. */
    callParticipants?: CallParticipantInfo[];
    /** Initiator of the event. */
    initiator?: IdentitySet;
}
