import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookOperation} from './deserializeIntoWorkbookOperation';
import {WorkbookOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookOperationCollectionResponse(workbookOperationCollectionResponse: WorkbookOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookOperationCollectionResponse),
        "value": n => { workbookOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookOperation) as any ; },
    }
}
