import {DirectoryObjectsRequestBuilderGetQueryParameters} from './directoryObjectsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryObjectsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DirectoryObjectsRequestBuilderGetQueryParameters;
}
