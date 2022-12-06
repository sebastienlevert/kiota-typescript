import {DirectoryRolesRequestBuilderGetQueryParameters} from './directoryRolesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryRolesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DirectoryRolesRequestBuilderGetQueryParameters;
}
