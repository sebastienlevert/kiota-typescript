import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TodoRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
