import {DirectoryScopeRequestBuilderGetQueryParameters} from './directoryScopeRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryScopeRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DirectoryScopeRequestBuilderGetQueryParameters;
}
