import {ConnectedOrganizationsRequestBuilderGetQueryParameters} from './connectedOrganizationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ConnectedOrganizationsRequestBuilderGetQueryParameters;
}
