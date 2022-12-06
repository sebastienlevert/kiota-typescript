import {AuditEventItemRequestBuilderGetQueryParameters} from './auditEventItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuditEventItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuditEventItemRequestBuilderGetQueryParameters;
}
