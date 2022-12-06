import {DomainDnsRecord} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainDnsSrvRecord extends DomainDnsRecord, Partial<Parsable> {
    /** Value to use when configuring the Target property of the SRV record at the DNS host. */
    nameTarget?: string;
    /** Value to use when configuring the port property of the SRV record at the DNS host. */
    port?: number;
    /** Value to use when configuring the priority property of the SRV record at the DNS host. */
    priority?: number;
    /** Value to use when configuring the protocol property of the SRV record at the DNS host. */
    protocol?: string;
    /** Value to use when configuring the service property of the SRV record at the DNS host. */
    service?: string;
    /** Value to use when configuring the weight property of the SRV record at the DNS host. */
    weight?: number;
}
