import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RemoteLockRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
