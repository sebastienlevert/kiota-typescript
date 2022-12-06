import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ListsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
