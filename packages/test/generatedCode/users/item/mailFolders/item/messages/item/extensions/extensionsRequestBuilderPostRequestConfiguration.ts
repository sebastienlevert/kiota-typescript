import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExtensionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
