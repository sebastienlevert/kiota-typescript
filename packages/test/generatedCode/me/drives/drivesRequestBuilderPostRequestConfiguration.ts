import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DrivesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
