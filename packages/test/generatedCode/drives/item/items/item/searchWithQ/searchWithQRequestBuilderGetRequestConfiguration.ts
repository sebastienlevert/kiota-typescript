import {SearchWithQRequestBuilderGetQueryParameters} from './searchWithQRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SearchWithQRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SearchWithQRequestBuilderGetQueryParameters;
}
