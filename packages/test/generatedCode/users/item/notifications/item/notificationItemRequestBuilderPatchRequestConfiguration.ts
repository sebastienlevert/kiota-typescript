import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NotificationItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
