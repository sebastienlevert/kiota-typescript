import {AppRoleAssignmentRequestBuilderGetQueryParameters} from './appRoleAssignmentRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppRoleAssignmentRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AppRoleAssignmentRequestBuilderGetQueryParameters;
}
