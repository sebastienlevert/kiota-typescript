import {ExternalColumnsRequestBuilderGetQueryParameters} from './externalColumnsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExternalColumnsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ExternalColumnsRequestBuilderGetQueryParameters;
}
