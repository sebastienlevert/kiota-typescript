import {AccessPackagesRequestBuilderGetQueryParameters} from './accessPackagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessPackagesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AccessPackagesRequestBuilderGetQueryParameters;
}
