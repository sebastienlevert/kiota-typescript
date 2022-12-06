import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TimesOffRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
