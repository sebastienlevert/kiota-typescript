import {AccessReviewsRequestBuilderGetQueryParameters} from './accessReviewsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessReviewsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AccessReviewsRequestBuilderGetQueryParameters;
}
