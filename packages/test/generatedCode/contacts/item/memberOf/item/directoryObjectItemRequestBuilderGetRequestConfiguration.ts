import {DirectoryObjectItemRequestBuilderGetQueryParameters} from './directoryObjectItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryObjectItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DirectoryObjectItemRequestBuilderGetQueryParameters;
}
