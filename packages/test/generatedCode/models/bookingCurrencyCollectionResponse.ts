import {BaseCollectionPaginationCountResponse, BookingCurrency} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCurrencyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: BookingCurrency[];
}
