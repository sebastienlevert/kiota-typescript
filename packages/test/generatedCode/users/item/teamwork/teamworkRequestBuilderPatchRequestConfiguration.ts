import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamworkRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
