import {BaseCollectionPaginationCountResponse, BookingCustomerInformationBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomerInformationBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingCustomerInformationBase[];
}
