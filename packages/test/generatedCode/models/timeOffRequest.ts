import {ScheduleChangeRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffRequest extends Partial<Parsable>, ScheduleChangeRequest {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    endDateTime?: Date;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    startDateTime?: Date;
    /** The reason for the time off. */
    timeOffReasonId?: string;
}
