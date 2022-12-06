import {AcceptedSendersRequestBuilderGetQueryParameters} from './acceptedSendersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AcceptedSendersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AcceptedSendersRequestBuilderGetQueryParameters;
}
