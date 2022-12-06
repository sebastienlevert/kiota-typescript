import {DomainDnsRecordCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomainDnsRecord} from './serializeDomainDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsRecordCollectionResponse(writer: SerializationWriter, domainDnsRecordCollectionResponse: DomainDnsRecordCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainDnsRecordCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", domainDnsRecordCollectionResponse.value as any, serializeDomainDnsRecord);
}
