import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartTitleFormat} from './deserializeIntoWorkbookChartTitleFormat';
import {WorkbookChartTitle} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartTitle(workbookChartTitle: WorkbookChartTitle | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartTitle),
        "format": n => { workbookChartTitle.format = n.getObject(deserializeIntoWorkbookChartTitleFormat) as any ; },
        "overlay": n => { workbookChartTitle.overlay = n.getBooleanValue() as any ; },
        "text": n => { workbookChartTitle.text = n.getStringValue() as any ; },
        "visible": n => { workbookChartTitle.visible = n.getBooleanValue() as any ; },
    }
}
