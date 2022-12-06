import {DirectoryAuditItemRequestBuilderGetQueryParameters} from './directoryAuditItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryAuditItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DirectoryAuditItemRequestBuilderGetQueryParameters;
}
