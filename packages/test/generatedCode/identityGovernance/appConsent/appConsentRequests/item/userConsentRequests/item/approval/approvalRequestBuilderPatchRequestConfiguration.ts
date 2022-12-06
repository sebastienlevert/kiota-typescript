import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApprovalRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
