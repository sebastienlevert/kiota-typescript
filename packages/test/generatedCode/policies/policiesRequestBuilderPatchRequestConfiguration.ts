import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PoliciesRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
