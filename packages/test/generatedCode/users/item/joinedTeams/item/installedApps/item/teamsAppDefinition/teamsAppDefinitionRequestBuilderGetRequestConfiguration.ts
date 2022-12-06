import {TeamsAppDefinitionRequestBuilderGetQueryParameters} from './teamsAppDefinitionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAppDefinitionRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TeamsAppDefinitionRequestBuilderGetQueryParameters;
}
