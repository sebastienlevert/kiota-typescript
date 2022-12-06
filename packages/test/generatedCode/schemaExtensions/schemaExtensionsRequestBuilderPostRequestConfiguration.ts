import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SchemaExtensionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
