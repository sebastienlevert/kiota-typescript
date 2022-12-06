import {DomainDnsRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsTxtRecord extends DomainDnsRecord, Partial<Parsable> {
    /** Value used when configuring the text property at the DNS host. */
    text?: string;
}
