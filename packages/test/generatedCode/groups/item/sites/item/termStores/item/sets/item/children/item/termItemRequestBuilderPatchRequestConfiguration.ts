import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
