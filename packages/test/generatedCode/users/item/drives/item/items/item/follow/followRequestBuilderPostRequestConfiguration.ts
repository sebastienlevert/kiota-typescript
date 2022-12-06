import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FollowRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
