import {ApprovalItemRequestBuilderGetQueryParameters} from './approvalItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApprovalItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: ApprovalItemRequestBuilderGetQueryParameters;
}
