import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExtensionItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
