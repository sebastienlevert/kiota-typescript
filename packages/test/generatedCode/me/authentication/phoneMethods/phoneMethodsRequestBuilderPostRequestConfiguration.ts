import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PhoneMethodsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
