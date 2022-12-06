import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SettingsRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
