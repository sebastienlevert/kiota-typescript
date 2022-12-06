import {DomainDnsUnavailableRecordCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomainDnsUnavailableRecord} from './serializeDomainDnsUnavailableRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsUnavailableRecordCollectionResponse(writer: SerializationWriter, domainDnsUnavailableRecordCollectionResponse: DomainDnsUnavailableRecordCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainDnsUnavailableRecordCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", domainDnsUnavailableRecordCollectionResponse.value as any, serializeDomainDnsUnavailableRecord);
}
