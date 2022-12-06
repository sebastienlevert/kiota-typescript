import {TeamsAppDefinitionItemRequestBuilderGetQueryParameters} from './teamsAppDefinitionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinitionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TeamsAppDefinitionItemRequestBuilderGetQueryParameters;
}
