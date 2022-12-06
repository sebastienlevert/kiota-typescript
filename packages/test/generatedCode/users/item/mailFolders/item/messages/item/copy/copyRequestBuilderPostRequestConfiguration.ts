import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CopyRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
