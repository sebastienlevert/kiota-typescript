import {BaseCollectionPaginationCountResponse, BookingWorkTimeSlot} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingWorkTimeSlotCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingWorkTimeSlot[];
}
