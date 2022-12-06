import {ColumnLinkItemRequestBuilderGetQueryParameters} from './columnLinkItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ColumnLinkItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ColumnLinkItemRequestBuilderGetQueryParameters;
}
