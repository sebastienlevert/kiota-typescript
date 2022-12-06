import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AddRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
