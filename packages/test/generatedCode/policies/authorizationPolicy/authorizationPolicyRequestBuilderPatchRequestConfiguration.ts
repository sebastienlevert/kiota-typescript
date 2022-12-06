import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthorizationPolicyRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
