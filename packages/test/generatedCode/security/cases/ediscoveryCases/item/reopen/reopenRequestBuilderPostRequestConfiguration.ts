import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ReopenRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
