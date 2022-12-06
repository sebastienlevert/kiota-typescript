import {EffectiveRulesRequestBuilderGetQueryParameters} from './effectiveRulesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EffectiveRulesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: EffectiveRulesRequestBuilderGetQueryParameters;
}
