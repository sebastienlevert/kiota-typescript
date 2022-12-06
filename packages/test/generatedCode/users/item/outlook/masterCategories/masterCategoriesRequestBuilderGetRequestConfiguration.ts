import {MasterCategoriesRequestBuilderGetQueryParameters} from './masterCategoriesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MasterCategoriesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MasterCategoriesRequestBuilderGetQueryParameters;
}
