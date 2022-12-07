import {ChecklistItemsRequestBuilderGetQueryParameters} from './checklistItemsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChecklistItemsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ChecklistItemsRequestBuilderGetQueryParameters;
}
