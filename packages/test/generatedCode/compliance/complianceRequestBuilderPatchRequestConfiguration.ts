import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ComplianceRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
