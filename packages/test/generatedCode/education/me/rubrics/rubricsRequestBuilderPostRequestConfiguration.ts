import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RubricsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
