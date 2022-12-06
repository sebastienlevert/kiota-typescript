import {ResourceOperationsRequestBuilderGetQueryParameters} from './resourceOperationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ResourceOperationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ResourceOperationsRequestBuilderGetQueryParameters;
}
