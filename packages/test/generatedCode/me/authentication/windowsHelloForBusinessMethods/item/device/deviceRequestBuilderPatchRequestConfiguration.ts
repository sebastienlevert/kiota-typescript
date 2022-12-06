import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
