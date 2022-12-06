import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PoliciesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
