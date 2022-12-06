import {AccessPackageRequestBuilderGetQueryParameters} from './accessPackageRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessPackageRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AccessPackageRequestBuilderGetQueryParameters;
}
