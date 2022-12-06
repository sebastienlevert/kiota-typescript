import {RoleDefinitionsRequestBuilderGetQueryParameters} from './roleDefinitionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RoleDefinitionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: RoleDefinitionsRequestBuilderGetQueryParameters;
}
