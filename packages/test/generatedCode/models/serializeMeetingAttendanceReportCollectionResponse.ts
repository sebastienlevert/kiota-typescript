import {MeetingAttendanceReportCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMeetingAttendanceReport} from './serializeMeetingAttendanceReport';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingAttendanceReportCollectionResponse(writer: SerializationWriter, meetingAttendanceReportCollectionResponse: MeetingAttendanceReportCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, meetingAttendanceReportCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", meetingAttendanceReportCollectionResponse.value as any, serializeMeetingAttendanceReport);
}
