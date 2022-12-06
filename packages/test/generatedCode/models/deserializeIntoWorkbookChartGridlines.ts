import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartGridlinesFormat} from './deserializeIntoWorkbookChartGridlinesFormat';
import {WorkbookChartGridlines} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartGridlines(workbookChartGridlines: WorkbookChartGridlines | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartGridlines),
        "format": n => { workbookChartGridlines.format = n.getObject(deserializeIntoWorkbookChartGridlinesFormat) as any ; },
        "visible": n => { workbookChartGridlines.visible = n.getBooleanValue() as any ; },
    }
}
