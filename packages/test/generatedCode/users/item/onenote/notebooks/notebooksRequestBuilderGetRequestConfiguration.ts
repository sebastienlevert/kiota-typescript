import {NotebooksRequestBuilderGetQueryParameters} from './notebooksRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NotebooksRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: NotebooksRequestBuilderGetQueryParameters;
}
