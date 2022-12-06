import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SecurityRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
