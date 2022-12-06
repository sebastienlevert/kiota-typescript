import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CasesRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
