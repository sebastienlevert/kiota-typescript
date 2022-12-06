import {AttendanceIntervalCollectionResponse} from './index';
import {serializeAttendanceInterval} from './serializeAttendanceInterval';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendanceIntervalCollectionResponse(writer: SerializationWriter, attendanceIntervalCollectionResponse: AttendanceIntervalCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attendanceIntervalCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", attendanceIntervalCollectionResponse.value as any, serializeAttendanceInterval);
}
