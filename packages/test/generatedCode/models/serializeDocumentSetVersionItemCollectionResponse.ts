import {DocumentSetVersionItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDocumentSetVersionItem} from './serializeDocumentSetVersionItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetVersionItemCollectionResponse(writer: SerializationWriter, documentSetVersionItemCollectionResponse: DocumentSetVersionItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, documentSetVersionItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", documentSetVersionItemCollectionResponse.value as any, serializeDocumentSetVersionItem);
}
