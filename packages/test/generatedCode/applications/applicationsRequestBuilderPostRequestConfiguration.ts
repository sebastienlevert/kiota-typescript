import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
