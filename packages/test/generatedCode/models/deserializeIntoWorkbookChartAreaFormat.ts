import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartFill} from './deserializeIntoWorkbookChartFill';
import {deserializeIntoWorkbookChartFont} from './deserializeIntoWorkbookChartFont';
import {WorkbookChartAreaFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAreaFormat(workbookChartAreaFormat: WorkbookChartAreaFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAreaFormat),
        "fill": n => { workbookChartAreaFormat.fill = n.getObject(deserializeIntoWorkbookChartFill) as any ; },
        "font": n => { workbookChartAreaFormat.font = n.getObject(deserializeIntoWorkbookChartFont) as any ; },
    }
}
