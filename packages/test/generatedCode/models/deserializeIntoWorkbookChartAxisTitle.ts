import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChartAxisTitleFormat} from './deserializeIntoWorkbookChartAxisTitleFormat';
import {WorkbookChartAxisTitle} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartAxisTitle(workbookChartAxisTitle: WorkbookChartAxisTitle | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartAxisTitle),
        "format": n => { workbookChartAxisTitle.format = n.getObject(deserializeIntoWorkbookChartAxisTitleFormat) as any ; },
        "text": n => { workbookChartAxisTitle.text = n.getStringValue() as any ; },
        "visible": n => { workbookChartAxisTitle.visible = n.getBooleanValue() as any ; },
    }
}
