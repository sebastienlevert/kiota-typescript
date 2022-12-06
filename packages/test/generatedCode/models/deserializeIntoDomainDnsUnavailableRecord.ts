import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsUnavailableRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsUnavailableRecord(domainDnsUnavailableRecord: DomainDnsUnavailableRecord | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsUnavailableRecord),
        "description": n => { domainDnsUnavailableRecord.description = n.getStringValue() as any ; },
    }
}
