import {TeamsTabItemRequestBuilderGetQueryParameters} from './teamsTabItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsTabItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TeamsTabItemRequestBuilderGetQueryParameters;
}
