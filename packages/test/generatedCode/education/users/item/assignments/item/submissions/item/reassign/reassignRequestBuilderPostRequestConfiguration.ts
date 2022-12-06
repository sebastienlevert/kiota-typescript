import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ReassignRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
