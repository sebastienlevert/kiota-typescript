import {ShiftItemRequestBuilderGetQueryParameters} from './shiftItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ShiftItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ShiftItemRequestBuilderGetQueryParameters;
}
