import {DirectoryRequestBuilderGetQueryParameters} from './directoryRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DirectoryRequestBuilderGetQueryParameters;
}
