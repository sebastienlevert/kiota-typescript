import {InstalledAppsRequestBuilderGetQueryParameters} from './installedAppsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InstalledAppsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: InstalledAppsRequestBuilderGetQueryParameters;
}
