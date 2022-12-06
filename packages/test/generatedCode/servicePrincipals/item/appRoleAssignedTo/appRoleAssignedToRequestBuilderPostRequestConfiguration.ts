import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppRoleAssignedToRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
