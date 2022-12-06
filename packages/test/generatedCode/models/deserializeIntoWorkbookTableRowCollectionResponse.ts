import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookTableRow} from './deserializeIntoWorkbookTableRow';
import {WorkbookTableRowCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableRowCollectionResponse(workbookTableRowCollectionResponse: WorkbookTableRowCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookTableRowCollectionResponse),
        "value": n => { workbookTableRowCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookTableRow) as any ; },
    }
}
