import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRecentNotebook} from '../../../../../../../models/deserializeIntoRecentNotebook';
import {GetRecentNotebooksWithIncludePersonalNotebooksResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetRecentNotebooksWithIncludePersonalNotebooksResponse(getRecentNotebooksWithIncludePersonalNotebooksResponse: GetRecentNotebooksWithIncludePersonalNotebooksResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getRecentNotebooksWithIncludePersonalNotebooksResponse),
        "value": n => { getRecentNotebooksWithIncludePersonalNotebooksResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecentNotebook) as any ; },
    }
}
