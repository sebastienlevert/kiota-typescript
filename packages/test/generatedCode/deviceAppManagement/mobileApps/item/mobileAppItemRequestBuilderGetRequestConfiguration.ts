import {MobileAppItemRequestBuilderGetQueryParameters} from './mobileAppItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileAppItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MobileAppItemRequestBuilderGetQueryParameters;
}
