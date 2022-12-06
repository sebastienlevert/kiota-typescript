import {BookingCurrencyItemRequestBuilderGetQueryParameters} from './bookingCurrencyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingCurrencyItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BookingCurrencyItemRequestBuilderGetQueryParameters;
}
