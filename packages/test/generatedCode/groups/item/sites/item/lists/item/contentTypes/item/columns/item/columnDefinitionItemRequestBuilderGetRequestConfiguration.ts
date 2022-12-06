import {ColumnDefinitionItemRequestBuilderGetQueryParameters} from './columnDefinitionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ColumnDefinitionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ColumnDefinitionItemRequestBuilderGetQueryParameters;
}
