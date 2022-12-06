import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
