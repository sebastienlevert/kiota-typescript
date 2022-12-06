import {BaseCollectionPaginationCountResponse, BookingBusiness} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingBusinessCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingBusiness[];
}
