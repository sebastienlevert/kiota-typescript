import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsCnameRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsCnameRecord(domainDnsCnameRecord: DomainDnsCnameRecord | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsCnameRecord),
        "canonicalName": n => { domainDnsCnameRecord.canonicalName = n.getStringValue() as any ; },
    }
}
