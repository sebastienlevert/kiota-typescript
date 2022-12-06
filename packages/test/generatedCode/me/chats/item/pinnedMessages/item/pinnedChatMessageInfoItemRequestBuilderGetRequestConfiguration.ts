import {PinnedChatMessageInfoItemRequestBuilderGetQueryParameters} from './pinnedChatMessageInfoItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfoItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PinnedChatMessageInfoItemRequestBuilderGetQueryParameters;
}
