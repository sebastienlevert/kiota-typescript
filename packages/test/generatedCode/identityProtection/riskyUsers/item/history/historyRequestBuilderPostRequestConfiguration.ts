import {RequestOption} from '@microsoft/kiota-abstractions';

export interface HistoryRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
