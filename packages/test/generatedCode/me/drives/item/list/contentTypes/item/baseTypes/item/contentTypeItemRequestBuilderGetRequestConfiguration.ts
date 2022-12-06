import {ContentTypeItemRequestBuilderGetQueryParameters} from './contentTypeItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContentTypeItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ContentTypeItemRequestBuilderGetQueryParameters;
}
