import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrivacyRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
