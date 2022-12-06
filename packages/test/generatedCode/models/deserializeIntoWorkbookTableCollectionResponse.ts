import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookTable} from './deserializeIntoWorkbookTable';
import {WorkbookTableCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableCollectionResponse(workbookTableCollectionResponse: WorkbookTableCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookTableCollectionResponse),
        "value": n => { workbookTableCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookTable) as any ; },
    }
}
