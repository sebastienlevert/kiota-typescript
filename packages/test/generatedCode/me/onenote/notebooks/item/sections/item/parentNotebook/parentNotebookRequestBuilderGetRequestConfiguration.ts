import {ParentNotebookRequestBuilderGetQueryParameters} from './parentNotebookRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ParentNotebookRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ParentNotebookRequestBuilderGetQueryParameters;
}
