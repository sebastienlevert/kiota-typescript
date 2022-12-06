import {DomainDnsCnameRecord} from './index';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsCnameRecord(writer: SerializationWriter, domainDnsCnameRecord: DomainDnsCnameRecord | undefined = {}) : void {
        serializeDomainDnsRecord(writer, domainDnsCnameRecord)
            writer.writeStringValue("canonicalName", domainDnsCnameRecord.canonicalName);
}
