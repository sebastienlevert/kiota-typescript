import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MeRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
