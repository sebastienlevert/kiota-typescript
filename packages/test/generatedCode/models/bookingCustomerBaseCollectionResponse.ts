import {BaseCollectionPaginationCountResponse, BookingCustomerBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomerBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingCustomerBase[];
}
