import {DefaultPagesRequestBuilderGetQueryParameters} from './defaultPagesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefaultPagesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DefaultPagesRequestBuilderGetQueryParameters;
}
