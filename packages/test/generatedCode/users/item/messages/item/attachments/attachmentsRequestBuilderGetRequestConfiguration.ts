import {AttachmentsRequestBuilderGetQueryParameters} from './attachmentsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AttachmentsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AttachmentsRequestBuilderGetQueryParameters;
}
