import {ConnectionOperationItemRequestBuilderGetQueryParameters} from './connectionOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectionOperationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConnectionOperationItemRequestBuilderGetQueryParameters;
}
