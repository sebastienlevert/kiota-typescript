import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Fido2MethodsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
