import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ForwardRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
