import {BaseCollectionPaginationCountResponse, BookingReminder} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingReminderCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingReminder[];
}
