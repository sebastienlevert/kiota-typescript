import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PermissionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
