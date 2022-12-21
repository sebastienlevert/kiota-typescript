import {MessageRulesRequestBuilderGetQueryParameters} from './messageRulesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MessageRulesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MessageRulesRequestBuilderGetQueryParameters;
}
