import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {ExternalItemCollectionResponse} from './index';
import {serializeExternalItem} from './serializeExternalItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalItemCollectionResponse(writer: SerializationWriter, externalItemCollectionResponse: ExternalItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, externalItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", externalItemCollectionResponse.value as any, serializeExternalItem);
}
