import {PhoneMethodsRequestBuilderGetQueryParameters} from './phoneMethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PhoneMethodsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PhoneMethodsRequestBuilderGetQueryParameters;
}
