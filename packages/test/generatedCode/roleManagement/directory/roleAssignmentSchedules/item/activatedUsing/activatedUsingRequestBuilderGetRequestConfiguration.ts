import {ActivatedUsingRequestBuilderGetQueryParameters} from './activatedUsingRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ActivatedUsingRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ActivatedUsingRequestBuilderGetQueryParameters;
}
