import {TeamsTemplatesRequestBuilderGetQueryParameters} from './teamsTemplatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsTemplatesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TeamsTemplatesRequestBuilderGetQueryParameters;
}
