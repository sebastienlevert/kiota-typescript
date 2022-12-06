import {MeetingAttendanceReport} from './index';
import {serializeAttendanceRecord} from './serializeAttendanceRecord';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingAttendanceReport(writer: SerializationWriter, meetingAttendanceReport: MeetingAttendanceReport | undefined = {}) : void {
        serializeEntity(writer, meetingAttendanceReport)
            writer.writeCollectionOfObjectValuesFromMethod("attendanceRecords", meetingAttendanceReport.attendanceRecords as any, serializeAttendanceRecord);
            writer.writeDateValue("meetingEndDateTime", meetingAttendanceReport.meetingEndDateTime);
            writer.writeDateValue("meetingStartDateTime", meetingAttendanceReport.meetingStartDateTime);
            writer.writeNumberValue("totalParticipantCount", meetingAttendanceReport.totalParticipantCount);
}
