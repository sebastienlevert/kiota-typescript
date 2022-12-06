import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartFill} from './deserializeIntoWorkbookChartFill';
import {WorkbookChartPointFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartPointFormat(workbookChartPointFormat: WorkbookChartPointFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartPointFormat),
        "fill": n => { workbookChartPointFormat.fill = n.getObject(deserializeIntoWorkbookChartFill) as any ; },
    }
}
