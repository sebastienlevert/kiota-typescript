import {LinkedResourceItemRequestBuilderGetQueryParameters} from './linkedResourceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LinkedResourceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: LinkedResourceItemRequestBuilderGetQueryParameters;
}
