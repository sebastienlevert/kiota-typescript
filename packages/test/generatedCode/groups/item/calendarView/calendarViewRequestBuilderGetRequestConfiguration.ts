import {CalendarViewRequestBuilderGetQueryParameters} from './calendarViewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarViewRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CalendarViewRequestBuilderGetQueryParameters;
}
