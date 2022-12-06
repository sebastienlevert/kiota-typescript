import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MessagesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
