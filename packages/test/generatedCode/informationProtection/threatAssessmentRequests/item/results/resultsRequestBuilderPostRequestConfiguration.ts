import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResultsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
