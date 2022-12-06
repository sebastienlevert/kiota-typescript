import {UserAttributeRequestBuilderGetQueryParameters} from './userAttributeRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserAttributeRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: UserAttributeRequestBuilderGetQueryParameters;
}
