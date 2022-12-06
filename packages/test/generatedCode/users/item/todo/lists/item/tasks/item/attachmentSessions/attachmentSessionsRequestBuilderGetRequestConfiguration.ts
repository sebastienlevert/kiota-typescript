import {AttachmentSessionsRequestBuilderGetQueryParameters} from './attachmentSessionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttachmentSessionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AttachmentSessionsRequestBuilderGetQueryParameters;
}
