import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalConnectionItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
