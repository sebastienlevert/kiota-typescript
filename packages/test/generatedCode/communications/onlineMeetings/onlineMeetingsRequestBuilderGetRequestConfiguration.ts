import {OnlineMeetingsRequestBuilderGetQueryParameters} from './onlineMeetingsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnlineMeetingsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: OnlineMeetingsRequestBuilderGetQueryParameters;
}
