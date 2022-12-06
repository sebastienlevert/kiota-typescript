import {EventMessageDetail, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallTranscriptEventMessageDetail extends EventMessageDetail, Partial<Parsable> {
    /** Unique identifier of the call. */
    callId?: string;
    /** Unique identifier for a call transcript. */
    callTranscriptICalUid?: string;
    /** The organizer of the meeting. */
    meetingOrganizer?: IdentitySet;
}
