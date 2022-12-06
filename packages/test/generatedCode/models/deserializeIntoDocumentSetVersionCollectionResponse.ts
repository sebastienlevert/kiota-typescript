import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDocumentSetVersion} from './deserializeIntoDocumentSetVersion';
import {DocumentSetVersionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentSetVersionCollectionResponse(documentSetVersionCollectionResponse: DocumentSetVersionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(documentSetVersionCollectionResponse),
        "value": n => { documentSetVersionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDocumentSetVersion) as any ; },
    }
}
