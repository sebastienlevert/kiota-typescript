import {AuditEventsRequestBuilderGetQueryParameters} from './auditEventsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AuditEventsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: AuditEventsRequestBuilderGetQueryParameters;
}
