import {EventType} from './eventType';
import {DateTimeTimeZone, Event, Location, Message, PatternedRecurrence} from './index';
import {MeetingMessageType} from './meetingMessageType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessage extends Message, Partial<Parsable> {
    /** The endDateTime property */
    endDateTime?: DateTimeTimeZone;
    /** The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only. */
    event?: Event;
    /** The isAllDay property */
    isAllDay?: boolean;
    /** The isDelegated property */
    isDelegated?: boolean;
    /** The isOutOfDate property */
    isOutOfDate?: boolean;
    /** The location property */
    location?: Location;
    /** The meetingMessageType property */
    meetingMessageType?: MeetingMessageType;
    /** The recurrence property */
    recurrence?: PatternedRecurrence;
    /** The startDateTime property */
    startDateTime?: DateTimeTimeZone;
    /** The type property */
    type?: EventType;
}
