import {AccessPackageItemRequestBuilderGetQueryParameters} from './accessPackageItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AccessPackageItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AccessPackageItemRequestBuilderGetQueryParameters;
}
