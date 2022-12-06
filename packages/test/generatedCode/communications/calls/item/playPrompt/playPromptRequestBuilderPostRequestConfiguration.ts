import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PlayPromptRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
