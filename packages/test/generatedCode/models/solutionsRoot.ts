import {BookingBusiness, BookingCurrency} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SolutionsRoot extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The bookingBusinesses property */
    bookingBusinesses?: BookingBusiness[];
    /** The bookingCurrencies property */
    bookingCurrencies?: BookingCurrency[];
    /** The OdataType property */
    odataType?: string;
}
