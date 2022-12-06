import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DevicesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
