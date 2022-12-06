import {TargetScheduleRequestBuilderGetQueryParameters} from './targetScheduleRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TargetScheduleRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TargetScheduleRequestBuilderGetQueryParameters;
}
