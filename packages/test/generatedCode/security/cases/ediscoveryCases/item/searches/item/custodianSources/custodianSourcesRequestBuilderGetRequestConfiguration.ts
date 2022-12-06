import {CustodianSourcesRequestBuilderGetQueryParameters} from './custodianSourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustodianSourcesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CustodianSourcesRequestBuilderGetQueryParameters;
}
