import {DomainCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDomain} from './serializeDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDomainCollectionResponse(writer: SerializationWriter, domainCollectionResponse: DomainCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, domainCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", domainCollectionResponse.value as any, serializeDomain);
}
