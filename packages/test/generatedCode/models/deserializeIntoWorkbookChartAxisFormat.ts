import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartFont} from './deserializeIntoWorkbookChartFont';
import {deserializeIntoWorkbookChartLineFormat} from './deserializeIntoWorkbookChartLineFormat';
import {WorkbookChartAxisFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxisFormat(workbookChartAxisFormat: WorkbookChartAxisFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxisFormat),
        "font": n => { workbookChartAxisFormat.font = n.getObject(deserializeIntoWorkbookChartFont) as any ; },
        "line": n => { workbookChartAxisFormat.line = n.getObject(deserializeIntoWorkbookChartLineFormat) as any ; },
    }
}
