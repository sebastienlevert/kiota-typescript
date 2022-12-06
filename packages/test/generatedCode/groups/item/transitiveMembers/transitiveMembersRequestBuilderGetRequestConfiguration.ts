import {TransitiveMembersRequestBuilderGetQueryParameters} from './transitiveMembersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TransitiveMembersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TransitiveMembersRequestBuilderGetQueryParameters;
}
