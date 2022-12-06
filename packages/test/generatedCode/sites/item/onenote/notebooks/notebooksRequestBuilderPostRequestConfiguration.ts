import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NotebooksRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
