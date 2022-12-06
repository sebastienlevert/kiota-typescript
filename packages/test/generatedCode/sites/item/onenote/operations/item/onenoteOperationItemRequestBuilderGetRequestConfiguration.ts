import {OnenoteOperationItemRequestBuilderGetQueryParameters} from './onenoteOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnenoteOperationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OnenoteOperationItemRequestBuilderGetQueryParameters;
}
