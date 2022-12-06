import {SecureScoresRequestBuilderGetQueryParameters} from './secureScoresRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SecureScoresRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SecureScoresRequestBuilderGetQueryParameters;
}
