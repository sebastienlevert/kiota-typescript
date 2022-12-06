import {DataPolicyOperationItemRequestBuilderGetQueryParameters} from './dataPolicyOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DataPolicyOperationItemRequestBuilderGetQueryParameters;
}
