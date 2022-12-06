import {BitlockerRequestBuilderGetQueryParameters} from './bitlockerRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BitlockerRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: BitlockerRequestBuilderGetQueryParameters;
}
