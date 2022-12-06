import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ColumnsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
