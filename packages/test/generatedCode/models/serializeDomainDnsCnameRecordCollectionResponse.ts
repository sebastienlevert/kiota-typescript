import {DomainDnsCnameRecordCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomainDnsCnameRecord} from './serializeDomainDnsCnameRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsCnameRecordCollectionResponse(writer: SerializationWriter, domainDnsCnameRecordCollectionResponse: DomainDnsCnameRecordCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainDnsCnameRecordCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", domainDnsCnameRecordCollectionResponse.value as any, serializeDomainDnsCnameRecord);
}
