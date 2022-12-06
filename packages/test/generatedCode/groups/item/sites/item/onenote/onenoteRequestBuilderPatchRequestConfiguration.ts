import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenoteRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
