import {DomainDnsRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsMxRecord extends DomainDnsRecord, Partial<Parsable> {
    /** Value used when configuring the answer/destination/value of the MX record at the DNS host. */
    mailExchange?: string;
    /** Value used when configuring the Preference/Priority property of the MX record at the DNS host. */
    preference?: number;
}
