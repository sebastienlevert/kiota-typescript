import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ActivateRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
