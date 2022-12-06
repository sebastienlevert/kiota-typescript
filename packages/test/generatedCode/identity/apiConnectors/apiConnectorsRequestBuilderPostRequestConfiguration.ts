import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApiConnectorsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
