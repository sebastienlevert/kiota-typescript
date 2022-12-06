import {HistoryDefinitionsRequestBuilderGetQueryParameters} from './historyDefinitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HistoryDefinitionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: HistoryDefinitionsRequestBuilderGetQueryParameters;
}
