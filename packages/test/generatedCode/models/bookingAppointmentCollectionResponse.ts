import {BaseCollectionPaginationCountResponse, BookingAppointment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingAppointmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingAppointment[];
}
