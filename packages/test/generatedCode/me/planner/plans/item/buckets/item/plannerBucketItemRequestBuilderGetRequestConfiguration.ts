import {PlannerBucketItemRequestBuilderGetQueryParameters} from './plannerBucketItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PlannerBucketItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PlannerBucketItemRequestBuilderGetQueryParameters;
}
