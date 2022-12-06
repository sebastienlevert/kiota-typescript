import {PlannerTaskItemRequestBuilderGetQueryParameters} from './plannerTaskItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PlannerTaskItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PlannerTaskItemRequestBuilderGetQueryParameters;
}
