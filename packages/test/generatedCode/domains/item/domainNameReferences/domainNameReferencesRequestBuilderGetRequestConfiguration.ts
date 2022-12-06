import {DomainNameReferencesRequestBuilderGetQueryParameters} from './domainNameReferencesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DomainNameReferencesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DomainNameReferencesRequestBuilderGetQueryParameters;
}
