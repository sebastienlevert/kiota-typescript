import {CalendarPermissionItemRequestBuilderGetQueryParameters} from './calendarPermissionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarPermissionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CalendarPermissionItemRequestBuilderGetQueryParameters;
}
