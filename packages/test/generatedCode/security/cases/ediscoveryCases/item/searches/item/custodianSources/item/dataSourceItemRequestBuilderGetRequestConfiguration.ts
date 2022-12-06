import {DataSourceItemRequestBuilderGetQueryParameters} from './dataSourceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataSourceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DataSourceItemRequestBuilderGetQueryParameters;
}
