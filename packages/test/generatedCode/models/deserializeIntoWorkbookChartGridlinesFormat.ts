import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartLineFormat} from './deserializeIntoWorkbookChartLineFormat';
import {WorkbookChartGridlinesFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartGridlinesFormat(workbookChartGridlinesFormat: WorkbookChartGridlinesFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartGridlinesFormat),
        "line": n => { workbookChartGridlinesFormat.line = n.getObject(deserializeIntoWorkbookChartLineFormat) as any ; },
    }
}
