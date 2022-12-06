import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
