import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EndpointItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
