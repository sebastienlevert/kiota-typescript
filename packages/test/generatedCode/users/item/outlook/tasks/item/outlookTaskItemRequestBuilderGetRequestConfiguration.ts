import {OutlookTaskItemRequestBuilderGetQueryParameters} from './outlookTaskItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OutlookTaskItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OutlookTaskItemRequestBuilderGetQueryParameters;
}
