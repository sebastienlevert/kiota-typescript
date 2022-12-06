import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppliesToRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
