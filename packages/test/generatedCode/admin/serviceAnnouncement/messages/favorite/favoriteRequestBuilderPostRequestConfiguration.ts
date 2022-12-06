import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FavoriteRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
}
