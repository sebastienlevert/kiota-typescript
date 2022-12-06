import {deserializeIntoAttendanceInterval} from './deserializeIntoAttendanceInterval';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AttendanceIntervalCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendanceIntervalCollectionResponse(attendanceIntervalCollectionResponse: AttendanceIntervalCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attendanceIntervalCollectionResponse),
        "value": n => { attendanceIntervalCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendanceInterval) as any ; },
    }
}
