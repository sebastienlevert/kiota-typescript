import {AttendanceRecord} from './index';
import {serializeAttendanceInterval} from './serializeAttendanceInterval';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendanceRecord(writer: SerializationWriter, attendanceRecord: AttendanceRecord | undefined = {}) : void {
        serializeEntity(writer, attendanceRecord)
            writer.writeCollectionOfObjectValuesFromMethod("attendanceIntervals", attendanceRecord.attendanceIntervals as any, serializeAttendanceInterval);
            writer.writeStringValue("emailAddress", attendanceRecord.emailAddress);
            writer.writeObjectValueFromMethod("identity", attendanceRecord.identity as any, serializeIdentity);
            writer.writeStringValue("registrantId", attendanceRecord.registrantId);
            writer.writeStringValue("role", attendanceRecord.role);
            writer.writeNumberValue("totalAttendanceInSeconds", attendanceRecord.totalAttendanceInSeconds);
}
