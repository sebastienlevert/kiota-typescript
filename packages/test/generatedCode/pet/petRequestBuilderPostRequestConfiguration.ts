import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PetRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
