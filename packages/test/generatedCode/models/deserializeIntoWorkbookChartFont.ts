import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookChartFont} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookChartFont(workbookChartFont: WorkbookChartFont | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookChartFont),
        "bold": n => { workbookChartFont.bold = n.getBooleanValue() as any ; },
        "color": n => { workbookChartFont.color = n.getStringValue() as any ; },
        "italic": n => { workbookChartFont.italic = n.getBooleanValue() as any ; },
        "name": n => { workbookChartFont.name = n.getStringValue() as any ; },
        "size": n => { workbookChartFont.size = n.getNumberValue() as any ; },
        "underline": n => { workbookChartFont.underline = n.getStringValue() as any ; },
    }
}
