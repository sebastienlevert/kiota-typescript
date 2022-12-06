import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UpgradeRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
