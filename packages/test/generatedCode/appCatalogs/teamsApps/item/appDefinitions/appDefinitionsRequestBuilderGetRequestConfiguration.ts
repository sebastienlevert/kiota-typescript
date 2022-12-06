import {AppDefinitionsRequestBuilderGetQueryParameters} from './appDefinitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppDefinitionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AppDefinitionsRequestBuilderGetQueryParameters;
}
