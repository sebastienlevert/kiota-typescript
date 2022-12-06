import {EventMessageDetail, IdentitySet} from './index';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallStartedEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Represents the call event type. Possible values are: call, meeting, screenShare, unknownFutureValue. */
    callEventType?: TeamworkCallEventType;
    /** Unique identifier of the call. */
    callId?: string;
    /** Initiator of the event. */
    initiator?: IdentitySet;
}
