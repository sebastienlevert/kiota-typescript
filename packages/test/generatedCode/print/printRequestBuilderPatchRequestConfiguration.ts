import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
