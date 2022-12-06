import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataSourceItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
