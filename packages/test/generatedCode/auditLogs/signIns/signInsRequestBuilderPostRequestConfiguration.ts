import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SignInsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
