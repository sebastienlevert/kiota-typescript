import {DeletedItemsRequestBuilderGetQueryParameters} from './deletedItemsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeletedItemsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeletedItemsRequestBuilderGetQueryParameters;
}
