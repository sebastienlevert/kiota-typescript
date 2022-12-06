import {BookingAppointmentItemRequestBuilderGetQueryParameters} from './bookingAppointmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingAppointmentItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BookingAppointmentItemRequestBuilderGetQueryParameters;
}
