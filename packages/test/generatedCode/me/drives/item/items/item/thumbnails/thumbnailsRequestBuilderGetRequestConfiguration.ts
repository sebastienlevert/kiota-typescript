import {ThumbnailsRequestBuilderGetQueryParameters} from './thumbnailsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ThumbnailsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ThumbnailsRequestBuilderGetQueryParameters;
}
