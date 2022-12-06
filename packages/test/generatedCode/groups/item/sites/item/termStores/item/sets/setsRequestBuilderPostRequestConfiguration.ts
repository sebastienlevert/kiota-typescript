import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SetsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
