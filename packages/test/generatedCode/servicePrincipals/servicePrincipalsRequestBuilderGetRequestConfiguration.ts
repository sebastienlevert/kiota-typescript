import {ServicePrincipalsRequestBuilderGetQueryParameters} from './servicePrincipalsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ServicePrincipalsRequestBuilderGetQueryParameters;
}
