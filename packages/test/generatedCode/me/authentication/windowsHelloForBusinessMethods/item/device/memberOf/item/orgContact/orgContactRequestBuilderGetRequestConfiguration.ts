import {OrgContactRequestBuilderGetQueryParameters} from './orgContactRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OrgContactRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OrgContactRequestBuilderGetQueryParameters;
}
