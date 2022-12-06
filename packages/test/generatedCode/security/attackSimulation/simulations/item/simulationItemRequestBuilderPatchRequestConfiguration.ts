import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SimulationItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
