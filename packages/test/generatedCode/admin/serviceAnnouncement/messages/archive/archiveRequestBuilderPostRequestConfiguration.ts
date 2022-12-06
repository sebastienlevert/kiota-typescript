import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ArchiveRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
