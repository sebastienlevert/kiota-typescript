import {DomainDnsTxtRecord} from './index';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsTxtRecord(writer: SerializationWriter, domainDnsTxtRecord: DomainDnsTxtRecord | undefined = {}) : void {
        serializeDomainDnsRecord(writer, domainDnsTxtRecord)
            writer.writeStringValue("text", domainDnsTxtRecord.text);
}
