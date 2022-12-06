import {AcceptancesRequestBuilderGetQueryParameters} from './acceptancesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AcceptancesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AcceptancesRequestBuilderGetQueryParameters;
}
