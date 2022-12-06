import {DataPolicyOperationsRequestBuilderGetQueryParameters} from './dataPolicyOperationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataPolicyOperationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DataPolicyOperationsRequestBuilderGetQueryParameters;
}
