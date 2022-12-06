import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefaultRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
