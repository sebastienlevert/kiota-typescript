import {SupportedTimeZonesRequestBuilderGetQueryParameters} from './supportedTimeZonesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SupportedTimeZonesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SupportedTimeZonesRequestBuilderGetQueryParameters;
}
