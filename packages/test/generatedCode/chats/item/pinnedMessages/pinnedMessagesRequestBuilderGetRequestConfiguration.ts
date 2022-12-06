import {PinnedMessagesRequestBuilderGetQueryParameters} from './pinnedMessagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PinnedMessagesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PinnedMessagesRequestBuilderGetQueryParameters;
}
