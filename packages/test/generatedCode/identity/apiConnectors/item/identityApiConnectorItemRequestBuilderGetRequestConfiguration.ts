import {IdentityApiConnectorItemRequestBuilderGetQueryParameters} from './identityApiConnectorItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentityApiConnectorItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: IdentityApiConnectorItemRequestBuilderGetQueryParameters;
}
