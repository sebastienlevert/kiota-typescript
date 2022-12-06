import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ReleaseRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
