import {MobileAppsRequestBuilderGetQueryParameters} from './mobileAppsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileAppsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MobileAppsRequestBuilderGetQueryParameters;
}
