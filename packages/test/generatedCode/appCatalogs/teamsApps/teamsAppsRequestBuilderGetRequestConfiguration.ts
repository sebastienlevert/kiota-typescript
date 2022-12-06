import {TeamsAppsRequestBuilderGetQueryParameters} from './teamsAppsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAppsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TeamsAppsRequestBuilderGetQueryParameters;
}
