import {ServicePrincipalRequestBuilderGetQueryParameters} from './servicePrincipalRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ServicePrincipalRequestBuilderGetQueryParameters;
}
