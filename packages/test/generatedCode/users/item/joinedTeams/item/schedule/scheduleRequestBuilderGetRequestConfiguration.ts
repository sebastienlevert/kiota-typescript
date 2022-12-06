import {ScheduleRequestBuilderGetQueryParameters} from './scheduleRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ScheduleRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ScheduleRequestBuilderGetQueryParameters;
}
