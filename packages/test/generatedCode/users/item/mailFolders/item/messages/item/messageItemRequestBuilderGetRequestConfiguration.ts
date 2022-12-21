import {MessageItemRequestBuilderGetQueryParameters} from './messageItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MessageItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: MessageItemRequestBuilderGetQueryParameters;
}
