import {AttachmentItemRequestBuilderGetQueryParameters} from './attachmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttachmentItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AttachmentItemRequestBuilderGetQueryParameters;
}
