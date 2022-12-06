import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookTableColumn} from './deserializeIntoWorkbookTableColumn';
import {WorkbookTableColumnCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableColumnCollectionResponse(workbookTableColumnCollectionResponse: WorkbookTableColumnCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookTableColumnCollectionResponse),
        "value": n => { workbookTableColumnCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookTableColumn) as any ; },
    }
}
