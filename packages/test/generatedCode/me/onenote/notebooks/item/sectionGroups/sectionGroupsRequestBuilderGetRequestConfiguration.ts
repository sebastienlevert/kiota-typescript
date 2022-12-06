import {SectionGroupsRequestBuilderGetQueryParameters} from './sectionGroupsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SectionGroupsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SectionGroupsRequestBuilderGetQueryParameters;
}
