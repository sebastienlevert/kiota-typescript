import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DetailsRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
