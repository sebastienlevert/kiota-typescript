import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SettingsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
