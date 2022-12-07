import {AttendanceInterval} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendanceInterval(writer: SerializationWriter, attendanceInterval: AttendanceInterval | undefined = {}) : void {
            writer.writeNumberValue("durationInSeconds", attendanceInterval.durationInSeconds);
            writer.writeDateValue("joinDateTime", attendanceInterval.joinDateTime);
            writer.writeDateValue("leaveDateTime", attendanceInterval.leaveDateTime);
}
