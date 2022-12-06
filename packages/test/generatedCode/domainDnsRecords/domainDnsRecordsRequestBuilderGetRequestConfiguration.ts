import {DomainDnsRecordsRequestBuilderGetQueryParameters} from './domainDnsRecordsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DomainDnsRecordsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: DomainDnsRecordsRequestBuilderGetQueryParameters;
}
