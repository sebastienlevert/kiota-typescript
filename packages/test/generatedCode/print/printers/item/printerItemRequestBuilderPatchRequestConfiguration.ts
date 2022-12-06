import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrinterItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
