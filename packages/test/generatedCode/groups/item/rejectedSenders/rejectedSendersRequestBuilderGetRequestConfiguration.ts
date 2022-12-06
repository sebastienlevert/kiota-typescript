import {RejectedSendersRequestBuilderGetQueryParameters} from './rejectedSendersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RejectedSendersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RejectedSendersRequestBuilderGetQueryParameters;
}
