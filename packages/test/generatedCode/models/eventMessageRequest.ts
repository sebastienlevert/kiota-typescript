import {DateTimeTimeZone, EventMessage, Location} from './index';
import {MeetingRequestType} from './meetingRequestType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventMessageRequest extends EventMessage, Partial<Parsable> {
    /** True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default is true. */
    allowNewTimeProposals?: boolean;
    /** The meetingRequestType property */
    meetingRequestType?: MeetingRequestType;
    /** If the meeting update changes the meeting end time, this property specifies the previous meeting end time. */
    previousEndDateTime?: DateTimeTimeZone;
    /** If the meeting update changes the meeting location, this property specifies the previous meeting location. */
    previousLocation?: Location;
    /** If the meeting update changes the meeting start time, this property specifies the previous meeting start time. */
    previousStartDateTime?: DateTimeTimeZone;
    /** Set to true if the sender would like the invitee to send a response to the requested meeting. */
    responseRequested?: boolean;
}
