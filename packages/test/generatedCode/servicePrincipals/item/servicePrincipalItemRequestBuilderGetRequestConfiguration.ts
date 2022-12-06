import {ServicePrincipalItemRequestBuilderGetQueryParameters} from './servicePrincipalItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ServicePrincipalItemRequestBuilderGetQueryParameters;
}
