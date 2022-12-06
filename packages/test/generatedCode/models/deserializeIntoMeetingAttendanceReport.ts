import {deserializeIntoAttendanceRecord} from './deserializeIntoAttendanceRecord';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MeetingAttendanceReport} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingAttendanceReport(meetingAttendanceReport: MeetingAttendanceReport | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(meetingAttendanceReport),
        "attendanceRecords": n => { meetingAttendanceReport.attendanceRecords = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendanceRecord) as any ; },
        "meetingEndDateTime": n => { meetingAttendanceReport.meetingEndDateTime = n.getDateValue() as any ; },
        "meetingStartDateTime": n => { meetingAttendanceReport.meetingStartDateTime = n.getDateValue() as any ; },
        "totalParticipantCount": n => { meetingAttendanceReport.totalParticipantCount = n.getNumberValue() as any ; },
    }
}
