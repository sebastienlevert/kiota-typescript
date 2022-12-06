import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookRangeFont} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeFont(workbookRangeFont: WorkbookRangeFont | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeFont),
        "bold": n => { workbookRangeFont.bold = n.getBooleanValue() as any ; },
        "color": n => { workbookRangeFont.color = n.getStringValue() as any ; },
        "italic": n => { workbookRangeFont.italic = n.getBooleanValue() as any ; },
        "name": n => { workbookRangeFont.name = n.getStringValue() as any ; },
        "size": n => { workbookRangeFont.size = n.getNumberValue() as any ; },
        "underline": n => { workbookRangeFont.underline = n.getStringValue() as any ; },
    }
}
