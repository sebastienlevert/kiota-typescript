import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserSourcesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
