import {BookingServiceItemRequestBuilderGetQueryParameters} from './bookingServiceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingServiceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BookingServiceItemRequestBuilderGetQueryParameters;
}
