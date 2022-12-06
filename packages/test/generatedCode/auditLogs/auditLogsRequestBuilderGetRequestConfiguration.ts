import {AuditLogsRequestBuilderGetQueryParameters} from './auditLogsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuditLogsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuditLogsRequestBuilderGetQueryParameters;
}
