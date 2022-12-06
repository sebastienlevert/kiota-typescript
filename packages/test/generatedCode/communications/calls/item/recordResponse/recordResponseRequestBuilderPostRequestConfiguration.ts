import {RequestOption} from '@microsoft/kiota-abstractions';

export interface RecordResponseRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
