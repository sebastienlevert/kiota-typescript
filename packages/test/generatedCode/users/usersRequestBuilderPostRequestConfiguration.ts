import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UsersRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
