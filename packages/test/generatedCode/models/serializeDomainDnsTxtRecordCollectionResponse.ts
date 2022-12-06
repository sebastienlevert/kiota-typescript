import {DomainDnsTxtRecordCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomainDnsTxtRecord} from './serializeDomainDnsTxtRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainDnsTxtRecordCollectionResponse(writer: SerializationWriter, domainDnsTxtRecordCollectionResponse: DomainDnsTxtRecordCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainDnsTxtRecordCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", domainDnsTxtRecordCollectionResponse.value as any, serializeDomainDnsTxtRecord);
}
