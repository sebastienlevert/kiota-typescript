import {AdditionalAccessRequestBuilderGetQueryParameters} from './additionalAccessRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AdditionalAccessRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AdditionalAccessRequestBuilderGetQueryParameters;
}
