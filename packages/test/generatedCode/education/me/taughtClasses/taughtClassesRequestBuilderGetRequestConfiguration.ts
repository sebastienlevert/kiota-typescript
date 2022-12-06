import {TaughtClassesRequestBuilderGetQueryParameters} from './taughtClassesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TaughtClassesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TaughtClassesRequestBuilderGetQueryParameters;
}
