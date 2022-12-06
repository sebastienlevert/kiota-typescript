import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookRangeView} from './deserializeIntoWorkbookRangeView';
import {WorkbookRangeViewCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeViewCollectionResponse(workbookRangeViewCollectionResponse: WorkbookRangeViewCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookRangeViewCollectionResponse),
        "value": n => { workbookRangeViewCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookRangeView) as any ; },
    }
}
