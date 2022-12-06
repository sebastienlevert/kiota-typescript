import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DecisionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
