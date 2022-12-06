import {ChatMessageItemRequestBuilderGetQueryParameters} from './chatMessageItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ChatMessageItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ChatMessageItemRequestBuilderGetQueryParameters;
}
