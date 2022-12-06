import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DomainsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
