import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookPivotTable} from './deserializeIntoWorkbookPivotTable';
import {WorkbookPivotTableCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookPivotTableCollectionResponse(workbookPivotTableCollectionResponse: WorkbookPivotTableCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookPivotTableCollectionResponse),
        "value": n => { workbookPivotTableCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookPivotTable) as any ; },
    }
}
