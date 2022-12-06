import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ClassesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
