import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EffectiveRulesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
