import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartLegendFormat} from './deserializeIntoWorkbookChartLegendFormat';
import {WorkbookChartLegend} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartLegend(workbookChartLegend: WorkbookChartLegend | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartLegend),
        "format": n => { workbookChartLegend.format = n.getObject(deserializeIntoWorkbookChartLegendFormat) as any ; },
        "overlay": n => { workbookChartLegend.overlay = n.getBooleanValue() as any ; },
        "position": n => { workbookChartLegend.position = n.getStringValue() as any ; },
        "visible": n => { workbookChartLegend.visible = n.getBooleanValue() as any ; },
    }
}
