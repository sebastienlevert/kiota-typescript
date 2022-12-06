import {HistoryItemsRequestBuilderGetQueryParameters} from './historyItemsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HistoryItemsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: HistoryItemsRequestBuilderGetQueryParameters;
}
