import {ColumnLinksRequestBuilderGetQueryParameters} from './columnLinksRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ColumnLinksRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ColumnLinksRequestBuilderGetQueryParameters;
}
