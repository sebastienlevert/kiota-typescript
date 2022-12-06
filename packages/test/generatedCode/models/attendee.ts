import {AttendeeBase, ResponseStatus, TimeSlot} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Attendee extends AttendeeBase, Partial<Parsable> {
    /** An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event. */
    proposedNewTime?: TimeSlot;
    /** The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent. */
    status?: ResponseStatus;
}
