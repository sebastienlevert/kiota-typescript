import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookChart} from './deserializeIntoWorkbookChart';
import {WorkbookChartCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartCollectionResponse(workbookChartCollectionResponse: WorkbookChartCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartCollectionResponse),
        "value": n => { workbookChartCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookChart) as any ; },
    }
}
