import {TimesOffRequestBuilderGetQueryParameters} from './timesOffRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TimesOffRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: TimesOffRequestBuilderGetQueryParameters;
}
