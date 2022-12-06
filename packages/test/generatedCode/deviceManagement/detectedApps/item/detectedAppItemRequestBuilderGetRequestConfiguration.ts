import {DetectedAppItemRequestBuilderGetQueryParameters} from './detectedAppItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DetectedAppItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DetectedAppItemRequestBuilderGetQueryParameters;
}
