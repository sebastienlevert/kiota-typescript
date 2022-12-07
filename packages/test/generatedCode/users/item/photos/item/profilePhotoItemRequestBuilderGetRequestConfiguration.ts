import {ProfilePhotoItemRequestBuilderGetQueryParameters} from './profilePhotoItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ProfilePhotoItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ProfilePhotoItemRequestBuilderGetQueryParameters;
}
