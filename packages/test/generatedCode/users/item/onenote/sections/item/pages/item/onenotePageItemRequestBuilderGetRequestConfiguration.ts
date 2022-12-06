import {OnenotePageItemRequestBuilderGetQueryParameters} from './onenotePageItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenotePageItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OnenotePageItemRequestBuilderGetQueryParameters;
}
