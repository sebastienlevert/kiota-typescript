import {DirectoryRoleItemRequestBuilderGetQueryParameters} from './directoryRoleItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryRoleItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DirectoryRoleItemRequestBuilderGetQueryParameters;
}
