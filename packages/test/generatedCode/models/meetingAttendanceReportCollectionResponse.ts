import {BaseCollectionPaginationCountResponse, MeetingAttendanceReport} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingAttendanceReportCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MeetingAttendanceReport[];
}
