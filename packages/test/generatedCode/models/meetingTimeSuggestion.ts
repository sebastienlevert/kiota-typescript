import {FreeBusyStatus} from './freeBusyStatus';
import {AttendeeAvailability, Location, TimeSlot} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingTimeSuggestion extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** An array that shows the availability status of each attendee for this meeting suggestion. */
    attendeeAvailability?: AttendeeAvailability[];
    /** A percentage that represents the likelhood of all the attendees attending. */
    confidence?: number;
    /** An array that specifies the name and geographic location of each meeting location for this meeting suggestion. */
    locations?: Location[];
    /** A time period suggested for the meeting. */
    meetingTimeSlot?: TimeSlot;
    /** The OdataType property */
    odataType?: string;
    /** Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if there are suggestions with the same confidence. */
    order?: number;
    /** Availability of the meeting organizer for this meeting suggestion. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown. */
    organizerAvailability?: FreeBusyStatus;
    /** Reason for suggesting the meeting time. */
    suggestionReason?: string;
}
