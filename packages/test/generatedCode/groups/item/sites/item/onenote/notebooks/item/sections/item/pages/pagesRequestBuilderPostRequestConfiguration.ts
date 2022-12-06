import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PagesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
