import {AllChannelsRequestBuilderGetQueryParameters} from './allChannelsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AllChannelsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AllChannelsRequestBuilderGetQueryParameters;
}
