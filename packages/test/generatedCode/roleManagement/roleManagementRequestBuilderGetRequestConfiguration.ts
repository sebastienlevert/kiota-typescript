import {RoleManagementRequestBuilderGetQueryParameters} from './roleManagementRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleManagementRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RoleManagementRequestBuilderGetQueryParameters;
}
