import {BaseCollectionPaginationCountResponse, BookingService} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingServiceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingService[];
}
