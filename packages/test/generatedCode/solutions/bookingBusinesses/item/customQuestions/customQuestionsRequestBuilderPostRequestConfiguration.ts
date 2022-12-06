import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustomQuestionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
