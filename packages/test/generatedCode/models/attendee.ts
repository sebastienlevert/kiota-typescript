import {AttendeeBase, ResponseStatus, TimeSlot} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Attendee extends AttendeeBase, Partial<Parsable> {
    /** The proposedNewTime property */
    proposedNewTime?: TimeSlot;
    /** The status property */
    status?: ResponseStatus;
}
