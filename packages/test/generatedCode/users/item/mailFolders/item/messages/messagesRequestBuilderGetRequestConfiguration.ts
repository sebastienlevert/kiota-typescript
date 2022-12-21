import {MessagesRequestBuilderGetQueryParameters} from './messagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MessagesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MessagesRequestBuilderGetQueryParameters;
}
