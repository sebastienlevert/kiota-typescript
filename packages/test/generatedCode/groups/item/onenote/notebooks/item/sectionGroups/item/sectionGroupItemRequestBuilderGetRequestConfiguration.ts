import {SectionGroupItemRequestBuilderGetQueryParameters} from './sectionGroupItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SectionGroupItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: SectionGroupItemRequestBuilderGetQueryParameters;
}
