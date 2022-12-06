import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OperationsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
