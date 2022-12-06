import {ConnectedOrganizationItemRequestBuilderGetQueryParameters} from './connectedOrganizationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConnectedOrganizationItemRequestBuilderGetQueryParameters;
}
