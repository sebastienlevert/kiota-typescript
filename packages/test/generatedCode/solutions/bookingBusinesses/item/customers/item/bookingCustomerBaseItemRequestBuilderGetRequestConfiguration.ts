import {BookingCustomerBaseItemRequestBuilderGetQueryParameters} from './bookingCustomerBaseItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingCustomerBaseItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BookingCustomerBaseItemRequestBuilderGetQueryParameters;
}
