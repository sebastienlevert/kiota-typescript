import {SiteSourceItemRequestBuilderGetQueryParameters} from './siteSourceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SiteSourceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SiteSourceItemRequestBuilderGetQueryParameters;
}
