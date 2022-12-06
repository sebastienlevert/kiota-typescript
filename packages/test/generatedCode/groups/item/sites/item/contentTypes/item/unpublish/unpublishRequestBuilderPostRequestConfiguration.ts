import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnpublishRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
