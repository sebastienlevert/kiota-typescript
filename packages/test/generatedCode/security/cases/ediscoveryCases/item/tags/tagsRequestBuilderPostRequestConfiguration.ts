import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TagsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
