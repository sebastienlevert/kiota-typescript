import {ConditionalAccessSettingsRequestBuilderGetQueryParameters} from './conditionalAccessSettingsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessSettingsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConditionalAccessSettingsRequestBuilderGetQueryParameters;
}
