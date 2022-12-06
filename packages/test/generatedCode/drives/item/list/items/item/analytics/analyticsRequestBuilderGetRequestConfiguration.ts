import {AnalyticsRequestBuilderGetQueryParameters} from './analyticsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AnalyticsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AnalyticsRequestBuilderGetQueryParameters;
}
