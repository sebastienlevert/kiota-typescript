import {NoncustodialSourcesRequestBuilderGetQueryParameters} from './noncustodialSourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NoncustodialSourcesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: NoncustodialSourcesRequestBuilderGetQueryParameters;
}
