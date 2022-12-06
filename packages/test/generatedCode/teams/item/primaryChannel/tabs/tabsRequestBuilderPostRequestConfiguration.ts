import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TabsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
