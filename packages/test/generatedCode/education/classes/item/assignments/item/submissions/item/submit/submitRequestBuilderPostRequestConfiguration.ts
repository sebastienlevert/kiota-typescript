import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubmitRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
