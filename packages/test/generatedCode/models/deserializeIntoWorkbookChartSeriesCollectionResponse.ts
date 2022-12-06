import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWorkbookChartSeries} from './deserializeIntoWorkbookChartSeries';
import {WorkbookChartSeriesCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartSeriesCollectionResponse(workbookChartSeriesCollectionResponse: WorkbookChartSeriesCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookChartSeriesCollectionResponse),
        "value": n => { workbookChartSeriesCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookChartSeries) as any ; },
    }
}
