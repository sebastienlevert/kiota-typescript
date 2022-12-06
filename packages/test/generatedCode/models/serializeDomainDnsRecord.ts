import {DomainDnsRecord} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsRecord(writer: SerializationWriter, domainDnsRecord: DomainDnsRecord | undefined = {}) : void {
        serializeEntity(writer, domainDnsRecord)
            writer.writeBooleanValue("isOptional", domainDnsRecord.isOptional);
            writer.writeStringValue("label", domainDnsRecord.label);
            writer.writeStringValue("recordType", domainDnsRecord.recordType);
            writer.writeStringValue("supportedService", domainDnsRecord.supportedService);
            writer.writeNumberValue("ttl", domainDnsRecord.ttl);
}
