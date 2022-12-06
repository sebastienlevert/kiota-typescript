import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SiteSourcesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
