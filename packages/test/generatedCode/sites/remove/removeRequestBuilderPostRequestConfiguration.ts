import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RemoveRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
