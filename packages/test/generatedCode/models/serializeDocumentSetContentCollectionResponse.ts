import {DocumentSetContentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDocumentSetContent} from './serializeDocumentSetContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentSetContentCollectionResponse(writer: SerializationWriter, documentSetContentCollectionResponse: DocumentSetContentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, documentSetContentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", documentSetContentCollectionResponse.value as any, serializeDocumentSetContent);
}
