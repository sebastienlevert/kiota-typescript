import {SharedInsightItemRequestBuilderGetQueryParameters} from './sharedInsightItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedInsightItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SharedInsightItemRequestBuilderGetQueryParameters;
}
