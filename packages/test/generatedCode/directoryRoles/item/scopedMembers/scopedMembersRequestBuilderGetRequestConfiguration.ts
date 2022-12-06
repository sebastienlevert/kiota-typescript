import {ScopedMembersRequestBuilderGetQueryParameters} from './scopedMembersRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ScopedMembersRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ScopedMembersRequestBuilderGetQueryParameters;
}
