import {RoleDefinitionItemRequestBuilderGetQueryParameters} from './roleDefinitionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleDefinitionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RoleDefinitionItemRequestBuilderGetQueryParameters;
}
