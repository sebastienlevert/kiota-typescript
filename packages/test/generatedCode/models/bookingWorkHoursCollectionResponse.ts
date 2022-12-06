import {BaseCollectionPaginationCountResponse, BookingWorkHours} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingWorkHoursCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingWorkHours[];
}
