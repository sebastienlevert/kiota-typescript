import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PresenceRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
