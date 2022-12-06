import {IncomingChannelsRequestBuilderGetQueryParameters} from './incomingChannelsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IncomingChannelsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: IncomingChannelsRequestBuilderGetQueryParameters;
}
