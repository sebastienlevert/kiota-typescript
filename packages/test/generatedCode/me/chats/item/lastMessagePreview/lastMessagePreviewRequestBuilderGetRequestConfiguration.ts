import {LastMessagePreviewRequestBuilderGetQueryParameters} from './lastMessagePreviewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LastMessagePreviewRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: LastMessagePreviewRequestBuilderGetQueryParameters;
}
