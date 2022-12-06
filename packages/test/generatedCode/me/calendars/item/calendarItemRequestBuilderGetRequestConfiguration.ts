import {CalendarItemRequestBuilderGetQueryParameters} from './calendarItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CalendarItemRequestBuilderGetQueryParameters;
}
