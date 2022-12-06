import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CommunicationsRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
