import {ThumbnailSetItemRequestBuilderGetQueryParameters} from './thumbnailSetItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ThumbnailSetItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ThumbnailSetItemRequestBuilderGetQueryParameters;
}
