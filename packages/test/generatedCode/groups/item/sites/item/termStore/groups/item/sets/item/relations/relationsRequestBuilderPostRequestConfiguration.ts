import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RelationsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
