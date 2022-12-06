import {LastSharedMethodRequestBuilderGetQueryParameters} from './lastSharedMethodRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LastSharedMethodRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: LastSharedMethodRequestBuilderGetQueryParameters;
}
