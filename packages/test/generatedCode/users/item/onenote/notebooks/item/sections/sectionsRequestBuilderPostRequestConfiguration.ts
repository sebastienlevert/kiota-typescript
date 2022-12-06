import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SectionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
