import {HealthOverviewsRequestBuilderGetQueryParameters} from './healthOverviewsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HealthOverviewsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: HealthOverviewsRequestBuilderGetQueryParameters;
}
