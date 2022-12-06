import {Fido2MethodsRequestBuilderGetQueryParameters} from './fido2MethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Fido2MethodsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: Fido2MethodsRequestBuilderGetQueryParameters;
}
