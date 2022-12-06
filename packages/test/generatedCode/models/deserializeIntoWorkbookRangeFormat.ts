import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookFormatProtection} from './deserializeIntoWorkbookFormatProtection';
import {deserializeIntoWorkbookRangeBorder} from './deserializeIntoWorkbookRangeBorder';
import {deserializeIntoWorkbookRangeFill} from './deserializeIntoWorkbookRangeFill';
import {deserializeIntoWorkbookRangeFont} from './deserializeIntoWorkbookRangeFont';
import {WorkbookRangeFormat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRangeFormat(workbookRangeFormat: WorkbookRangeFormat | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRangeFormat),
        "borders": n => { workbookRangeFormat.borders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookRangeBorder) as any ; },
        "columnWidth": n => { workbookRangeFormat.columnWidth = n.getNumberValue() as any ; },
        "fill": n => { workbookRangeFormat.fill = n.getObject(deserializeIntoWorkbookRangeFill) as any ; },
        "font": n => { workbookRangeFormat.font = n.getObject(deserializeIntoWorkbookRangeFont) as any ; },
        "horizontalAlignment": n => { workbookRangeFormat.horizontalAlignment = n.getStringValue() as any ; },
        "protection": n => { workbookRangeFormat.protection = n.getObject(deserializeIntoWorkbookFormatProtection) as any ; },
        "rowHeight": n => { workbookRangeFormat.rowHeight = n.getNumberValue() as any ; },
        "verticalAlignment": n => { workbookRangeFormat.verticalAlignment = n.getStringValue() as any ; },
        "wrapText": n => { workbookRangeFormat.wrapText = n.getBooleanValue() as any ; },
    }
}
