import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PermissionRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
