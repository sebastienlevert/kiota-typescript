import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PublishRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
