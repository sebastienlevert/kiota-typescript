import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMeetingAttendanceReport} from './deserializeIntoMeetingAttendanceReport';
import {MeetingAttendanceReportCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingAttendanceReportCollectionResponse(meetingAttendanceReportCollectionResponse: MeetingAttendanceReportCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(meetingAttendanceReportCollectionResponse),
        "value": n => { meetingAttendanceReportCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMeetingAttendanceReport) as any ; },
    }
}
