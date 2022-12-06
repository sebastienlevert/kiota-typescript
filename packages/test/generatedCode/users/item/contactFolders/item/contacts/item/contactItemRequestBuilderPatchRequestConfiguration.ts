import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContactItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
