import {ManagedMobileAppItemRequestBuilderGetQueryParameters} from './managedMobileAppItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedMobileAppItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ManagedMobileAppItemRequestBuilderGetQueryParameters;
}
