import {RoleAssignmentsRequestBuilderGetQueryParameters} from './roleAssignmentsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleAssignmentsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RoleAssignmentsRequestBuilderGetQueryParameters;
}
