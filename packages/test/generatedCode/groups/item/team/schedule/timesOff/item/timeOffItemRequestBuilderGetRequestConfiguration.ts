import {TimeOffItemRequestBuilderGetQueryParameters} from './timeOffItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TimeOffItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TimeOffItemRequestBuilderGetQueryParameters;
}
