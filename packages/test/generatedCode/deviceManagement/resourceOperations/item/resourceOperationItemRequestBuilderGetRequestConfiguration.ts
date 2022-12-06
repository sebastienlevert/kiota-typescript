import {ResourceOperationItemRequestBuilderGetQueryParameters} from './resourceOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourceOperationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ResourceOperationItemRequestBuilderGetQueryParameters;
}
