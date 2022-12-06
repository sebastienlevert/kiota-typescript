import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermStoreRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
