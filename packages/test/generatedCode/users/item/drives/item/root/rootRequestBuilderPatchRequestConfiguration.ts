import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RootRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
