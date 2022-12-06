import {DirectoryAuditsRequestBuilderGetQueryParameters} from './directoryAuditsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryAuditsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DirectoryAuditsRequestBuilderGetQueryParameters;
}
