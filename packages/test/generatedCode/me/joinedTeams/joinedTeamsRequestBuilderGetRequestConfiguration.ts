import {JoinedTeamsRequestBuilderGetQueryParameters} from './joinedTeamsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface JoinedTeamsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: JoinedTeamsRequestBuilderGetQueryParameters;
}
