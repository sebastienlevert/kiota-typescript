import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DomainDnsRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsRecord(domainDnsRecord: DomainDnsRecord | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(domainDnsRecord),
        "isOptional": n => { domainDnsRecord.isOptional = n.getBooleanValue() as any ; },
        "label": n => { domainDnsRecord.label = n.getStringValue() as any ; },
        "recordType": n => { domainDnsRecord.recordType = n.getStringValue() as any ; },
        "supportedService": n => { domainDnsRecord.supportedService = n.getStringValue() as any ; },
        "ttl": n => { domainDnsRecord.ttl = n.getNumberValue() as any ; },
    }
}
