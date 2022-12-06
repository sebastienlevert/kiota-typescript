import {PermissionGrantsRequestBuilderGetQueryParameters} from './permissionGrantsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PermissionGrantsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PermissionGrantsRequestBuilderGetQueryParameters;
}
