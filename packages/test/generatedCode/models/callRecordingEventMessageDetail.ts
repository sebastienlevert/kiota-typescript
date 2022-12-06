import {CallRecordingStatus} from './callRecordingStatus';
import {EventMessageDetail, IdentitySet} from './index';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface CallRecordingEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Unique identifier of the call. */
    callId?: string;
    /** Display name for the call recording. */
    callRecordingDisplayName?: string;
    /** Duration of the call recording. */
    callRecordingDuration?: Duration;
    /** Status of the call recording. Possible values are: success, failure, initial, chunkFinished, unknownFutureValue. */
    callRecordingStatus?: CallRecordingStatus;
    /** Call recording URL. */
    callRecordingUrl?: string;
    /** Initiator of the event. */
    initiator?: IdentitySet;
    /** Organizer of the meeting. */
    meetingOrganizer?: IdentitySet;
}
