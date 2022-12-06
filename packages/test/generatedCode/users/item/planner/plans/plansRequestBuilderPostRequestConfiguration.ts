import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PlansRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
