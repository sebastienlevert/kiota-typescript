import {TaskDefinitionsRequestBuilderGetQueryParameters} from './taskDefinitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TaskDefinitionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TaskDefinitionsRequestBuilderGetQueryParameters;
}
