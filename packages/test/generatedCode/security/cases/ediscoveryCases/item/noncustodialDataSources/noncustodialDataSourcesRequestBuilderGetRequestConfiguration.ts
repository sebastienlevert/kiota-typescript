import {NoncustodialDataSourcesRequestBuilderGetQueryParameters} from './noncustodialDataSourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NoncustodialDataSourcesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: NoncustodialDataSourcesRequestBuilderGetQueryParameters;
}
