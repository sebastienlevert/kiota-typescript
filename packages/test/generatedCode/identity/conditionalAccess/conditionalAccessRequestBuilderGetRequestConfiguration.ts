import {ConditionalAccessRequestBuilderGetQueryParameters} from './conditionalAccessRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConditionalAccessRequestBuilderGetQueryParameters;
}
