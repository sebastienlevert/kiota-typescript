import {DocumentSetVersionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDocumentSetVersion} from './serializeDocumentSetVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetVersionCollectionResponse(writer: SerializationWriter, documentSetVersionCollectionResponse: DocumentSetVersionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, documentSetVersionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", documentSetVersionCollectionResponse.value as any, serializeDocumentSetVersion);
}
