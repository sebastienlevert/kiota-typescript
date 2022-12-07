import {TaskFoldersRequestBuilderGetQueryParameters} from './taskFoldersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TaskFoldersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TaskFoldersRequestBuilderGetQueryParameters;
}
