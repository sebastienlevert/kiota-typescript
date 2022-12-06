import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OpenShiftsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
