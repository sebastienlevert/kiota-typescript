import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FileRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
