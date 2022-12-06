import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
