import {PasswordMethodsRequestBuilderGetQueryParameters} from './passwordMethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PasswordMethodsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PasswordMethodsRequestBuilderGetQueryParameters;
}
