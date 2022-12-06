import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TermsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
