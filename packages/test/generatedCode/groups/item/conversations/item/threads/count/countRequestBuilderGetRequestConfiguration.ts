import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CountRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
