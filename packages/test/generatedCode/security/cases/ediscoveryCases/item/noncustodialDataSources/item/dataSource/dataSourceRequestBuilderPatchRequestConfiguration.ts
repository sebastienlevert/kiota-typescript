import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataSourceRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
