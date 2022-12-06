import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsSrvRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsSrvRecord(domainDnsSrvRecord: DomainDnsSrvRecord | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsSrvRecord),
        "nameTarget": n => { domainDnsSrvRecord.nameTarget = n.getStringValue() as any ; },
        "port": n => { domainDnsSrvRecord.port = n.getNumberValue() as any ; },
        "priority": n => { domainDnsSrvRecord.priority = n.getNumberValue() as any ; },
        "protocol": n => { domainDnsSrvRecord.protocol = n.getStringValue() as any ; },
        "service": n => { domainDnsSrvRecord.service = n.getStringValue() as any ; },
        "weight": n => { domainDnsSrvRecord.weight = n.getNumberValue() as any ; },
    }
}
