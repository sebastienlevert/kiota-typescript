import {ActivitiesRequestBuilderGetQueryParameters} from './activitiesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ActivitiesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ActivitiesRequestBuilderGetQueryParameters;
}
