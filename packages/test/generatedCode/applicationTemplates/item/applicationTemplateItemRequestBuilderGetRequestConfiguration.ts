import {ApplicationTemplateItemRequestBuilderGetQueryParameters} from './applicationTemplateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationTemplateItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ApplicationTemplateItemRequestBuilderGetQueryParameters;
}
