import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartFill} from './deserializeIntoWorkbookChartFill';
import {deserializeIntoWorkbookChartFont} from './deserializeIntoWorkbookChartFont';
import {WorkbookChartLegendFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartLegendFormat(workbookChartLegendFormat: WorkbookChartLegendFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartLegendFormat),
        "fill": n => { workbookChartLegendFormat.fill = n.getObject(deserializeIntoWorkbookChartFill) as any ; },
        "font": n => { workbookChartLegendFormat.font = n.getObject(deserializeIntoWorkbookChartFont) as any ; },
    }
}
