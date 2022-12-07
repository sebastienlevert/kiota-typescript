import {WithPetItemRequestBuilderPostQueryParameters} from './withPetItemRequestBuilderPostQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WithPetItemRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: WithPetItemRequestBuilderPostQueryParameters;
}
