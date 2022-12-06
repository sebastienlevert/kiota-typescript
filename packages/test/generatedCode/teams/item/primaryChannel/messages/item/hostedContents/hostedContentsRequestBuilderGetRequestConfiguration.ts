import {HostedContentsRequestBuilderGetQueryParameters} from './hostedContentsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HostedContentsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: HostedContentsRequestBuilderGetQueryParameters;
}
