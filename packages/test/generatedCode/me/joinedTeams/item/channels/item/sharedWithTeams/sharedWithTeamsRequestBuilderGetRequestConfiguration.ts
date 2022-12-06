import {SharedWithTeamsRequestBuilderGetQueryParameters} from './sharedWithTeamsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedWithTeamsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SharedWithTeamsRequestBuilderGetQueryParameters;
}
