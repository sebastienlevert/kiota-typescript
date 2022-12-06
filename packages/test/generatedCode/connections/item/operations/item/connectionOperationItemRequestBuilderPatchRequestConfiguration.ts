import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectionOperationItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
