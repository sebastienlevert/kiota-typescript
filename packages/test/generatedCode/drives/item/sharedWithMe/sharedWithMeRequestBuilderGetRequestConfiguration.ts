import {SharedWithMeRequestBuilderGetQueryParameters} from './sharedWithMeRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedWithMeRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SharedWithMeRequestBuilderGetQueryParameters;
}
