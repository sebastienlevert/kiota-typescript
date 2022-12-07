import {UploadImageRequestBuilderPostQueryParameters} from './uploadImageRequestBuilderPostQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UploadImageRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: UploadImageRequestBuilderPostQueryParameters;
}
