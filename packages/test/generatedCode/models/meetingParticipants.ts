import {MeetingParticipantInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingParticipants extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Information of the meeting attendees. */
    attendees?: MeetingParticipantInfo[];
    /** The contributors property */
    contributors?: MeetingParticipantInfo[];
    /** The organizer property */
    organizer?: MeetingParticipantInfo;
    /** The producers property */
    producers?: MeetingParticipantInfo[];
}
