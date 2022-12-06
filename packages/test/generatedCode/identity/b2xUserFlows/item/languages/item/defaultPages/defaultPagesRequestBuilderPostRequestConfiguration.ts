import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefaultPagesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
