import {CallRecordItemRequestBuilderGetQueryParameters} from './callRecordItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CallRecordItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: CallRecordItemRequestBuilderGetQueryParameters;
}
