import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MoveRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
