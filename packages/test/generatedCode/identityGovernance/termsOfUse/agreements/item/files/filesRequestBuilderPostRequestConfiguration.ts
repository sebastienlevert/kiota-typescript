import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FilesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
