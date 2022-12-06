import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookSortField} from './deserializeIntoWorkbookSortField';
import {WorkbookSortFieldCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookSortFieldCollectionResponse(workbookSortFieldCollectionResponse: WorkbookSortFieldCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookSortFieldCollectionResponse),
        "value": n => { workbookSortFieldCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookSortField) as any ; },
    }
}
