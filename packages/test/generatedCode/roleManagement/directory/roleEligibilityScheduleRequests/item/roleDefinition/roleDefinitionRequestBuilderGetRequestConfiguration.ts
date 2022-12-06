import {RoleDefinitionRequestBuilderGetQueryParameters} from './roleDefinitionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleDefinitionRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RoleDefinitionRequestBuilderGetQueryParameters;
}
