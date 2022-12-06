import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
