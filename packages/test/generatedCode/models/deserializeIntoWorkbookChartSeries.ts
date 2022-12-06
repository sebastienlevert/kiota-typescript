import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartPoint} from './deserializeIntoWorkbookChartPoint';
import {deserializeIntoWorkbookChartSeriesFormat} from './deserializeIntoWorkbookChartSeriesFormat';
import {WorkbookChartSeries} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartSeries(workbookChartSeries: WorkbookChartSeries | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartSeries),
        "format": n => { workbookChartSeries.format = n.getObject(deserializeIntoWorkbookChartSeriesFormat) as any ; },
        "name": n => { workbookChartSeries.name = n.getStringValue() as any ; },
        "points": n => { workbookChartSeries.points = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookChartPoint) as any ; },
    }
}
