import {AsHierarchyRequestBuilderGetQueryParameters} from './asHierarchyRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AsHierarchyRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AsHierarchyRequestBuilderGetQueryParameters;
}
