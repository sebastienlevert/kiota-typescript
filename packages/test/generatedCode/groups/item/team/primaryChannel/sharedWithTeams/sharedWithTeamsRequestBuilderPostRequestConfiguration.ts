import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SharedWithTeamsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
