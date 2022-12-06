import {RoleAssignmentItemRequestBuilderGetQueryParameters} from './roleAssignmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleAssignmentItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RoleAssignmentItemRequestBuilderGetQueryParameters;
}
