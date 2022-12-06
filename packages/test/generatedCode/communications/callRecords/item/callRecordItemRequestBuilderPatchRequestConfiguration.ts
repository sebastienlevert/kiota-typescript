import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CallRecordItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
