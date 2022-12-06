import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TentativelyAcceptRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
