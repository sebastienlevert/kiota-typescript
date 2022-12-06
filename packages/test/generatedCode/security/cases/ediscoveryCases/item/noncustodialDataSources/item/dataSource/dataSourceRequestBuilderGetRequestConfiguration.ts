import {DataSourceRequestBuilderGetQueryParameters} from './dataSourceRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataSourceRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DataSourceRequestBuilderGetQueryParameters;
}
