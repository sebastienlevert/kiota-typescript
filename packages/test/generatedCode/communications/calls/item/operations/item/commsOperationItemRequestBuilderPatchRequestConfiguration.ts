import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CommsOperationItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
