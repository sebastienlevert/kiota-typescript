import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContentRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
