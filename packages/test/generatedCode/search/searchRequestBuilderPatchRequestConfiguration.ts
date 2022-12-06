import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SearchRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
