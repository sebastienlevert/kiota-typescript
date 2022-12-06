import {SchedulingGroupsRequestBuilderGetQueryParameters} from './schedulingGroupsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SchedulingGroupsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SchedulingGroupsRequestBuilderGetQueryParameters;
}
