import {deserializeIntoAttendanceRecord} from './deserializeIntoAttendanceRecord';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AttendanceRecordCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendanceRecordCollectionResponse(attendanceRecordCollectionResponse: AttendanceRecordCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attendanceRecordCollectionResponse),
        "value": n => { attendanceRecordCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendanceRecord) as any ; },
    }
}
