import {AttendeeType} from './attendeeType';
import {Recipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttendeeBase extends Partial<Parsable>, Recipient {
    /** The type of attendee. The possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type. */
    type?: AttendeeType;
}
