import {MobileAppConfigurationsRequestBuilderGetQueryParameters} from './mobileAppConfigurationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileAppConfigurationsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MobileAppConfigurationsRequestBuilderGetQueryParameters;
}
