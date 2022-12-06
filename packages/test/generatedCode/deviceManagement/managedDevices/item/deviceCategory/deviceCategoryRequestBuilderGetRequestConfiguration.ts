import {DeviceCategoryRequestBuilderGetQueryParameters} from './deviceCategoryRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCategoryRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DeviceCategoryRequestBuilderGetQueryParameters;
}
