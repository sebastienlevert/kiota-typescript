import {OnenoteResourceItemRequestBuilderGetQueryParameters} from './onenoteResourceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenoteResourceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OnenoteResourceItemRequestBuilderGetQueryParameters;
}
