import {InferenceClassificationRequestBuilderGetQueryParameters} from './inferenceClassificationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InferenceClassificationRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: InferenceClassificationRequestBuilderGetQueryParameters;
}
