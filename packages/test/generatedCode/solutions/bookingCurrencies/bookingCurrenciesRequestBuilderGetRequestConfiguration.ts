import {BookingCurrenciesRequestBuilderGetQueryParameters} from './bookingCurrenciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingCurrenciesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BookingCurrenciesRequestBuilderGetQueryParameters;
}
