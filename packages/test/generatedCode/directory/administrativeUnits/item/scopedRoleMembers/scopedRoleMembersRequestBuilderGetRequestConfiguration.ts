import {ScopedRoleMembersRequestBuilderGetQueryParameters} from './scopedRoleMembersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ScopedRoleMembersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ScopedRoleMembersRequestBuilderGetQueryParameters;
}
