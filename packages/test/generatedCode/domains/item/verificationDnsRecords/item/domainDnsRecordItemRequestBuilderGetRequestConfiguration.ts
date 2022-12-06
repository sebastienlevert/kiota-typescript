import {DomainDnsRecordItemRequestBuilderGetQueryParameters} from './domainDnsRecordItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DomainDnsRecordItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DomainDnsRecordItemRequestBuilderGetQueryParameters;
}
