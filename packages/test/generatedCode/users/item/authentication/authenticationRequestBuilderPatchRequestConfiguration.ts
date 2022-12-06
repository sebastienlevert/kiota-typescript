import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuthenticationRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
