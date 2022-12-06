import {OnenoteRequestBuilderGetQueryParameters} from './onenoteRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenoteRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OnenoteRequestBuilderGetQueryParameters;
}
