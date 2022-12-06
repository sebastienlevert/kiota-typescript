import {AssociatedTeamsRequestBuilderGetQueryParameters} from './associatedTeamsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AssociatedTeamsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AssociatedTeamsRequestBuilderGetQueryParameters;
}
