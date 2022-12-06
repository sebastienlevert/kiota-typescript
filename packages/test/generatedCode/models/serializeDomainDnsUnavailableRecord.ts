import {DomainDnsUnavailableRecord} from './index';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsUnavailableRecord(writer: SerializationWriter, domainDnsUnavailableRecord: DomainDnsUnavailableRecord | undefined = {}) : void {
        serializeDomainDnsRecord(writer, domainDnsUnavailableRecord)
            writer.writeStringValue("description", domainDnsUnavailableRecord.description);
}
