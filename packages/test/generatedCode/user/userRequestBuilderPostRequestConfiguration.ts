import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
