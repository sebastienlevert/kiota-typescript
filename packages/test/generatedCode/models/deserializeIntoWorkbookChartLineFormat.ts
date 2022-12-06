import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookChartLineFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartLineFormat(workbookChartLineFormat: WorkbookChartLineFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartLineFormat),
        "color": n => { workbookChartLineFormat.color = n.getStringValue() as any ; },
    }
}
