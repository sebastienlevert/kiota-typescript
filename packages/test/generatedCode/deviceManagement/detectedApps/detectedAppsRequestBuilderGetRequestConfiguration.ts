import {DetectedAppsRequestBuilderGetQueryParameters} from './detectedAppsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DetectedAppsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DetectedAppsRequestBuilderGetQueryParameters;
}
