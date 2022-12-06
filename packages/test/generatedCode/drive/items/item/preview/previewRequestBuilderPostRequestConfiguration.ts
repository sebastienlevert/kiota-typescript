import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PreviewRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
