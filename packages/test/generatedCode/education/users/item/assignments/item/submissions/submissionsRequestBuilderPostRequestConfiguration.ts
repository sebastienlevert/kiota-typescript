import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubmissionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
