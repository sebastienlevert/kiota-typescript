import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MessageRuleItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]>;
    /** Request options */
    options?: RequestOption[];
}
