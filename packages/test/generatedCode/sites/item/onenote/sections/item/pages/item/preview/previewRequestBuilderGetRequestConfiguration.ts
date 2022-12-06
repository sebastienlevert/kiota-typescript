import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PreviewRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
