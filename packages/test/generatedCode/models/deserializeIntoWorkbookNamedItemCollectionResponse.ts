import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookNamedItem} from './deserializeIntoWorkbookNamedItem';
import {WorkbookNamedItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookNamedItemCollectionResponse(workbookNamedItemCollectionResponse: WorkbookNamedItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookNamedItemCollectionResponse),
        "value": n => { workbookNamedItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookNamedItem) as any ; },
    }
}
