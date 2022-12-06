import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FieldsRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
