import {MeetingParticipantInfo} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingParticipants extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attendees property */
    attendees?: MeetingParticipantInfo[];
    /** The OdataType property */
    odataType?: string;
    /** The organizer property */
    organizer?: MeetingParticipantInfo;
}
