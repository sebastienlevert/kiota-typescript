import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RubricRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
