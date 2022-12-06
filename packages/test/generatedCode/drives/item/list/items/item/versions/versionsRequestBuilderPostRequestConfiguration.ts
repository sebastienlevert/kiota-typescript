import {RequestOption} from '@microsoft/kiota-abstractions';

export interface VersionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
