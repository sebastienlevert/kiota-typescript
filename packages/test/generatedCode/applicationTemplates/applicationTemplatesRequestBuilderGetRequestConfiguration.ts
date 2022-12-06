import {ApplicationTemplatesRequestBuilderGetQueryParameters} from './applicationTemplatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationTemplatesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ApplicationTemplatesRequestBuilderGetQueryParameters;
}
