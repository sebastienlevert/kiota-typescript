import {TeamsTemplateItemRequestBuilderGetQueryParameters} from './teamsTemplateItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsTemplateItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TeamsTemplateItemRequestBuilderGetQueryParameters;
}
