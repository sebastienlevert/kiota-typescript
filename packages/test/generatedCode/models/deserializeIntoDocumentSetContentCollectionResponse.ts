import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDocumentSetContent} from './deserializeIntoDocumentSetContent';
import {DocumentSetContentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetContentCollectionResponse(documentSetContentCollectionResponse: DocumentSetContentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(documentSetContentCollectionResponse),
        "value": n => { documentSetContentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDocumentSetContent) as any ; },
    }
}
