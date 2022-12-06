import {ParentGroupRequestBuilderGetQueryParameters} from './parentGroupRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ParentGroupRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ParentGroupRequestBuilderGetQueryParameters;
}
