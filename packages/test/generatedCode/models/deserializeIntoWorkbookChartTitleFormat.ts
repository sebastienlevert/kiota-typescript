import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartFill} from './deserializeIntoWorkbookChartFill';
import {deserializeIntoWorkbookChartFont} from './deserializeIntoWorkbookChartFont';
import {WorkbookChartTitleFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartTitleFormat(workbookChartTitleFormat: WorkbookChartTitleFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartTitleFormat),
        "fill": n => { workbookChartTitleFormat.fill = n.getObject(deserializeIntoWorkbookChartFill) as any ; },
        "font": n => { workbookChartTitleFormat.font = n.getObject(deserializeIntoWorkbookChartFont) as any ; },
    }
}
