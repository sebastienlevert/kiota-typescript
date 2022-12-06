import {StaffMembersRequestBuilderGetQueryParameters} from './staffMembersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface StaffMembersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: StaffMembersRequestBuilderGetQueryParameters;
}
