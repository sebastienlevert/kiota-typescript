import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookChartPoint} from './deserializeIntoWorkbookChartPoint';
import {WorkbookChartPointCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartPointCollectionResponse(workbookChartPointCollectionResponse: WorkbookChartPointCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartPointCollectionResponse),
        "value": n => { workbookChartPointCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookChartPoint) as any ; },
    }
}
