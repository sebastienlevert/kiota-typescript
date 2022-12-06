import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SegmentItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
