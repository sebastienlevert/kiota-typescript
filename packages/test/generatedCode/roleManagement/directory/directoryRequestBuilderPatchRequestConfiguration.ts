import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
