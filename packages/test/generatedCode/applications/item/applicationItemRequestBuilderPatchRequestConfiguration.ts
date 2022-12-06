import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
