import {AttendanceInterval} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendanceInterval(attendanceInterval: AttendanceInterval | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "durationInSeconds": n => { attendanceInterval.durationInSeconds = n.getNumberValue() as any ; },
        "joinDateTime": n => { attendanceInterval.joinDateTime = n.getDateValue() as any ; },
        "leaveDateTime": n => { attendanceInterval.leaveDateTime = n.getDateValue() as any ; },
    }
}
