import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookRangeBorder} from './deserializeIntoWorkbookRangeBorder';
import {WorkbookRangeBorderCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeBorderCollectionResponse(workbookRangeBorderCollectionResponse: WorkbookRangeBorderCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookRangeBorderCollectionResponse),
        "value": n => { workbookRangeBorderCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookRangeBorder) as any ; },
    }
}
