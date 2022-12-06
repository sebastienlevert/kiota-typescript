import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppScopeRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
