import {AttendanceRecord, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingAttendanceReport extends Entity, Partial<Parsable> {
    /** List of attendance records of an attendance report. Read-only. */
    attendanceRecords?: AttendanceRecord[];
    /** UTC time when the meeting ended. Read-only. */
    meetingEndDateTime?: Date;
    /** UTC time when the meeting started. Read-only. */
    meetingStartDateTime?: Date;
    /** Total number of participants. Read-only. */
    totalParticipantCount?: number;
}
