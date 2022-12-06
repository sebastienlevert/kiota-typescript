import {ExportJobsRequestBuilderGetQueryParameters} from './exportJobsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExportJobsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExportJobsRequestBuilderGetQueryParameters;
}
