import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MuteRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
