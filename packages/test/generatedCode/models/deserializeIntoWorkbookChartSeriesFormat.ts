import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartFill} from './deserializeIntoWorkbookChartFill';
import {deserializeIntoWorkbookChartLineFormat} from './deserializeIntoWorkbookChartLineFormat';
import {WorkbookChartSeriesFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartSeriesFormat(workbookChartSeriesFormat: WorkbookChartSeriesFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartSeriesFormat),
        "fill": n => { workbookChartSeriesFormat.fill = n.getObject(deserializeIntoWorkbookChartFill) as any ; },
        "line": n => { workbookChartSeriesFormat.line = n.getObject(deserializeIntoWorkbookChartLineFormat) as any ; },
    }
}
