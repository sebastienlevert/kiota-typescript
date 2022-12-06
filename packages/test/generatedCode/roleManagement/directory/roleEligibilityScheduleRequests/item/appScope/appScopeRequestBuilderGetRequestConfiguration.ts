import {AppScopeRequestBuilderGetQueryParameters} from './appScopeRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppScopeRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AppScopeRequestBuilderGetQueryParameters;
}
