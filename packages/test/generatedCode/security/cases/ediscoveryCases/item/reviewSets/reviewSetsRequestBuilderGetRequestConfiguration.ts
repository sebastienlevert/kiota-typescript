import {ReviewSetsRequestBuilderGetQueryParameters} from './reviewSetsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ReviewSetsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ReviewSetsRequestBuilderGetQueryParameters;
}
