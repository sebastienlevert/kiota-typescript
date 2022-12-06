import {DomainDnsSrvRecordCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomainDnsSrvRecord} from './serializeDomainDnsSrvRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsSrvRecordCollectionResponse(writer: SerializationWriter, domainDnsSrvRecordCollectionResponse: DomainDnsSrvRecordCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainDnsSrvRecordCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", domainDnsSrvRecordCollectionResponse.value as any, serializeDomainDnsSrvRecord);
}
