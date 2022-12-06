import {BookingBusinessItemRequestBuilderGetQueryParameters} from './bookingBusinessItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingBusinessItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BookingBusinessItemRequestBuilderGetQueryParameters;
}
