import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RenewRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
