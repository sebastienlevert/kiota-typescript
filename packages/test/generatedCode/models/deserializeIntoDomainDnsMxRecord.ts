import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsMxRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsMxRecord(domainDnsMxRecord: DomainDnsMxRecord | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsMxRecord),
        "mailExchange": n => { domainDnsMxRecord.mailExchange = n.getStringValue() as any ; },
        "preference": n => { domainDnsMxRecord.preference = n.getNumberValue() as any ; },
    }
}
