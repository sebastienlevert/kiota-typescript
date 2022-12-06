import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DriveItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
