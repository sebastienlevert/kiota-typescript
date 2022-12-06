import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PlannerRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
