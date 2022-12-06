import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CloneRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
