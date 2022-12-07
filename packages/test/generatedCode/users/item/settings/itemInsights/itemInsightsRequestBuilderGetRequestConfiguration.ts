import {ItemInsightsRequestBuilderGetQueryParameters} from './itemInsightsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ItemInsightsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ItemInsightsRequestBuilderGetQueryParameters;
}
