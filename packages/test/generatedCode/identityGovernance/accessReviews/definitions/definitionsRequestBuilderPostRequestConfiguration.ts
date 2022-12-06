import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefinitionsRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
