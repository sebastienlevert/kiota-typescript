import {CalendarGroupsRequestBuilderGetQueryParameters} from './calendarGroupsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarGroupsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CalendarGroupsRequestBuilderGetQueryParameters;
}
