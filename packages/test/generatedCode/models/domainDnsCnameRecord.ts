import {DomainDnsRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsCnameRecord extends DomainDnsRecord, Partial<Parsable> {
    /** The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host. */
    canonicalName?: string;
}
