import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DriveRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
