import {RequestOption} from '@microsoft/kiota-abstractions';

export interface StagesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
