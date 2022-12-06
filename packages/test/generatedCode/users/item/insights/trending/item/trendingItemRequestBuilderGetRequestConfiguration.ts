import {TrendingItemRequestBuilderGetQueryParameters} from './trendingItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TrendingItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TrendingItemRequestBuilderGetQueryParameters;
}
