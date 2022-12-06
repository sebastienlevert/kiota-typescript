import {AttendanceInterval, Entity, Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttendanceRecord extends Entity, Partial<Parsable> {
    /** List of time periods between joining and leaving a meeting. */
    attendanceIntervals?: AttendanceInterval[];
    /** Email address of the user associated with this atttendance record. */
    emailAddress?: string;
    /** Identity of the user associated with this atttendance record. */
    identity?: Identity;
    /** Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer. */
    role?: string;
    /** Total duration of the attendances in seconds. */
    totalAttendanceInSeconds?: number;
}
