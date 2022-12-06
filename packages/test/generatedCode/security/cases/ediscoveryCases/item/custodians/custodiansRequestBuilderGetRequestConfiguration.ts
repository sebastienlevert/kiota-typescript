import {CustodiansRequestBuilderGetQueryParameters} from './custodiansRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustodiansRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CustodiansRequestBuilderGetQueryParameters;
}
