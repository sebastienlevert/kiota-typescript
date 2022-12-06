import {DeviceCategoryItemRequestBuilderGetQueryParameters} from './deviceCategoryItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCategoryItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceCategoryItemRequestBuilderGetQueryParameters;
}
