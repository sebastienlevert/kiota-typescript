import {UserSourceItemRequestBuilderGetQueryParameters} from './userSourceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserSourceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: UserSourceItemRequestBuilderGetQueryParameters;
}
