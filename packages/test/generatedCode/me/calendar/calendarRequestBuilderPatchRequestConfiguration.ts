import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CalendarRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
