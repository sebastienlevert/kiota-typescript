import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SearchesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
