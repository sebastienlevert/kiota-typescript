import {deserializeIntoDomainDnsRecord} from './deserializeIntoDomainDnsRecord';
import {DomainDnsTxtRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainDnsTxtRecord(domainDnsTxtRecord: DomainDnsTxtRecord | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDomainDnsRecord(domainDnsTxtRecord),
        "text": n => { domainDnsTxtRecord.text = n.getStringValue() as any ; },
    }
}
