import {TodoTaskItemRequestBuilderGetQueryParameters} from './todoTaskItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TodoTaskItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TodoTaskItemRequestBuilderGetQueryParameters;
}
