import {ParentSectionRequestBuilderGetQueryParameters} from './parentSectionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ParentSectionRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ParentSectionRequestBuilderGetQueryParameters;
}
