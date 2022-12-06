import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LanguagesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
