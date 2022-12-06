import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoNotebook} from './deserializeIntoNotebook';
import {NotebookCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotebookCollectionResponse(notebookCollectionResponse: NotebookCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(notebookCollectionResponse),
        "value": n => { notebookCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNotebook) as any ; },
    }
}
