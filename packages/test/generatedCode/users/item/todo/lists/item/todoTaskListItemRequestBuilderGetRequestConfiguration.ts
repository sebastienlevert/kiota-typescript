import {TodoTaskListItemRequestBuilderGetQueryParameters} from './todoTaskListItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TodoTaskListItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TodoTaskListItemRequestBuilderGetQueryParameters;
}
