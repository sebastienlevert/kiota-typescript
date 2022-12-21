import {ChildFoldersRequestBuilderGetQueryParameters} from './childFoldersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChildFoldersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ChildFoldersRequestBuilderGetQueryParameters;
}
