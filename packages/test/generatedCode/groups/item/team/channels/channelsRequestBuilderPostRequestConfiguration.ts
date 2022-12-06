import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChannelsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
