import {SiteSourcesRequestBuilderGetQueryParameters} from './siteSourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SiteSourcesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SiteSourcesRequestBuilderGetQueryParameters;
}
