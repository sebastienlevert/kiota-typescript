import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDocumentSetVersionItem} from './deserializeIntoDocumentSetVersionItem';
import {DocumentSetVersionItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersionItemCollectionResponse(documentSetVersionItemCollectionResponse: DocumentSetVersionItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(documentSetVersionItemCollectionResponse),
        "value": n => { documentSetVersionItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDocumentSetVersionItem) as any ; },
    }
}
