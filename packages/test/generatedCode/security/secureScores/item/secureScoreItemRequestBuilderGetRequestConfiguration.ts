import {SecureScoreItemRequestBuilderGetQueryParameters} from './secureScoreItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SecureScoreItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SecureScoreItemRequestBuilderGetQueryParameters;
}
