import {AppRoleAssignedToRequestBuilderGetQueryParameters} from './appRoleAssignedToRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppRoleAssignedToRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AppRoleAssignedToRequestBuilderGetQueryParameters;
}
