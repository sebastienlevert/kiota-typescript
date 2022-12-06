import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectorsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
