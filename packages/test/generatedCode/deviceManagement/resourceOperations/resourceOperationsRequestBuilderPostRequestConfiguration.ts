import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourceOperationsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
