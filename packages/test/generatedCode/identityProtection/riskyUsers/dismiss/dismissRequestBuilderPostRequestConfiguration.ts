import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DismissRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
