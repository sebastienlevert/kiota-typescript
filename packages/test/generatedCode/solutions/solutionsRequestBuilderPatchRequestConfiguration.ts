import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SolutionsRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
