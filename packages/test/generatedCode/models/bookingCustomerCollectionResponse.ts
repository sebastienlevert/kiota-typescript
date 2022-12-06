import {BaseCollectionPaginationCountResponse, BookingCustomer} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomerCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingCustomer[];
}
