import {RiskyUserItemRequestBuilderGetQueryParameters} from './riskyUserItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RiskyUserItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RiskyUserItemRequestBuilderGetQueryParameters;
}
