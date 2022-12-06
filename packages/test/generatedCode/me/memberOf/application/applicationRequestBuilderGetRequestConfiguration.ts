import {ApplicationRequestBuilderGetQueryParameters} from './applicationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ApplicationRequestBuilderGetQueryParameters;
}
