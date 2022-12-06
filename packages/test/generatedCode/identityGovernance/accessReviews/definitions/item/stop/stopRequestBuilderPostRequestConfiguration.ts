import {RequestOption} from '@microsoft/kiota-abstractions';

export interface StopRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
