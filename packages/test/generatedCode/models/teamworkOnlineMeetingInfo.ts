import {TeamworkUserIdentity} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkOnlineMeetingInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identifier of the calendar event associated with the meeting. */
    calendarEventId?: string;
    /** The URL which can be clicked on to join or uniquely identify the meeting. */
    joinWebUrl?: string;
    /** The organizer property */
    organizer?: TeamworkUserIdentity;
}
