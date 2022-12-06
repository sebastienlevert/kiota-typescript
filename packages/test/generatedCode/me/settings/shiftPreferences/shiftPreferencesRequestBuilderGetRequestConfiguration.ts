import {ShiftPreferencesRequestBuilderGetQueryParameters} from './shiftPreferencesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ShiftPreferencesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ShiftPreferencesRequestBuilderGetQueryParameters;
}
