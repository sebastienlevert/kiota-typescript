import {ChecklistItemItemRequestBuilderGetQueryParameters} from './checklistItemItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChecklistItemItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ChecklistItemItemRequestBuilderGetQueryParameters;
}
