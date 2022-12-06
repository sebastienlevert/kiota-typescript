import {OnlineMeetingItemRequestBuilderGetQueryParameters} from './onlineMeetingItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnlineMeetingItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OnlineMeetingItemRequestBuilderGetQueryParameters;
}
