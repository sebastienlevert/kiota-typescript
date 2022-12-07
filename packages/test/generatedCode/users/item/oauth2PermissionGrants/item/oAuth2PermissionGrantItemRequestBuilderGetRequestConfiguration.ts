import {OAuth2PermissionGrantItemRequestBuilderGetQueryParameters} from './oAuth2PermissionGrantItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OAuth2PermissionGrantItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OAuth2PermissionGrantItemRequestBuilderGetQueryParameters;
}
