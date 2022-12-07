import {deserializeIntoAttendanceInterval} from './deserializeIntoAttendanceInterval';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {AttendanceRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendanceRecord(attendanceRecord: AttendanceRecord | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attendanceRecord),
        "attendanceIntervals": n => { attendanceRecord.attendanceIntervals = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendanceInterval) as any ; },
        "emailAddress": n => { attendanceRecord.emailAddress = n.getStringValue() as any ; },
        "identity": n => { attendanceRecord.identity = n.getObject(deserializeIntoIdentity) as any ; },
        "registrantId": n => { attendanceRecord.registrantId = n.getStringValue() as any ; },
        "role": n => { attendanceRecord.role = n.getStringValue() as any ; },
        "totalAttendanceInSeconds": n => { attendanceRecord.totalAttendanceInSeconds = n.getNumberValue() as any ; },
    }
}
