import {SourceColumnRequestBuilderGetQueryParameters} from './sourceColumnRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SourceColumnRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SourceColumnRequestBuilderGetQueryParameters;
}
