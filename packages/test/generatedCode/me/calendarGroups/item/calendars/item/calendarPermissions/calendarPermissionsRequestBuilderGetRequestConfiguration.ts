import {CalendarPermissionsRequestBuilderGetQueryParameters} from './calendarPermissionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarPermissionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CalendarPermissionsRequestBuilderGetQueryParameters;
}
