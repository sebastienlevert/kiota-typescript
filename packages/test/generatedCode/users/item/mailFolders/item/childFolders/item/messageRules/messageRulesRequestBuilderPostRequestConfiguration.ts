import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MessageRulesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]>;
    /** Request options */
    options?: RequestOption[];
}
