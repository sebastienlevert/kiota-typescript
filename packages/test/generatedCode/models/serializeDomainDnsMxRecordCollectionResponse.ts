import {DomainDnsMxRecordCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomainDnsMxRecord} from './serializeDomainDnsMxRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsMxRecordCollectionResponse(writer: SerializationWriter, domainDnsMxRecordCollectionResponse: DomainDnsMxRecordCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainDnsMxRecordCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", domainDnsMxRecordCollectionResponse.value as any, serializeDomainDnsMxRecord);
}
