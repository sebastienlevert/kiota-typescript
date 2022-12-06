import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TasksRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
