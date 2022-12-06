import {PrimaryChannelRequestBuilderGetQueryParameters} from './primaryChannelRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrimaryChannelRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: PrimaryChannelRequestBuilderGetQueryParameters;
}
