import {BookingBusinessesRequestBuilderGetQueryParameters} from './bookingBusinessesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingBusinessesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BookingBusinessesRequestBuilderGetQueryParameters;
}
