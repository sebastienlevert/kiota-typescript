import {AttendanceRecordCollectionResponse} from './index';
import {serializeAttendanceRecord} from './serializeAttendanceRecord';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendanceRecordCollectionResponse(writer: SerializationWriter, attendanceRecordCollectionResponse: AttendanceRecordCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attendanceRecordCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", attendanceRecordCollectionResponse.value as any, serializeAttendanceRecord);
}
