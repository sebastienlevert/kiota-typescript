import {ConversationThreadItemRequestBuilderGetQueryParameters} from './conversationThreadItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConversationThreadItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConversationThreadItemRequestBuilderGetQueryParameters;
}
