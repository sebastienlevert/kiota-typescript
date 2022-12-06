import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AcceptRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
