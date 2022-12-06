import {OrgContactItemRequestBuilderGetQueryParameters} from './orgContactItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OrgContactItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OrgContactItemRequestBuilderGetQueryParameters;
}
