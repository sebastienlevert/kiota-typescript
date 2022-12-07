import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartFill} from './deserializeIntoWorkbookChartFill';
import {deserializeIntoWorkbookChartFont} from './deserializeIntoWorkbookChartFont';
import {WorkbookChartDataLabelFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartDataLabelFormat(workbookChartDataLabelFormat: WorkbookChartDataLabelFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartDataLabelFormat),
        "fill": n => { workbookChartDataLabelFormat.fill = n.getObject(deserializeIntoWorkbookChartFill) as any ; },
        "font": n => { workbookChartDataLabelFormat.font = n.getObject(deserializeIntoWorkbookChartFont) as any ; },
    }
}
