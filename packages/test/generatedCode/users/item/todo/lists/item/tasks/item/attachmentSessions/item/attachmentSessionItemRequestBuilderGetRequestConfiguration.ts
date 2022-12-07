import {AttachmentSessionItemRequestBuilderGetQueryParameters} from './attachmentSessionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttachmentSessionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AttachmentSessionItemRequestBuilderGetQueryParameters;
}
