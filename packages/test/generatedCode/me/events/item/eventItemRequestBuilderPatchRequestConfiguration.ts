import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EventItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
