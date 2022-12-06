import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {deserializeIntoWorkbookRangeFormat} from './deserializeIntoWorkbookRangeFormat';
import {deserializeIntoWorkbookRangeSort} from './deserializeIntoWorkbookRangeSort';
import {deserializeIntoWorkbookWorksheet} from './deserializeIntoWorkbookWorksheet';
import {WorkbookRange} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookRange(workbookRange: WorkbookRange | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookRange),
        "address": n => { workbookRange.address = n.getStringValue() as any ; },
        "addressLocal": n => { workbookRange.addressLocal = n.getStringValue() as any ; },
        "cellCount": n => { workbookRange.cellCount = n.getNumberValue() as any ; },
        "columnCount": n => { workbookRange.columnCount = n.getNumberValue() as any ; },
        "columnHidden": n => { workbookRange.columnHidden = n.getBooleanValue() as any ; },
        "columnIndex": n => { workbookRange.columnIndex = n.getNumberValue() as any ; },
        "format": n => { workbookRange.format = n.getObject(deserializeIntoWorkbookRangeFormat) as any ; },
        "formulas": n => { workbookRange.formulas = n.getObject(deserializeIntoJson) as any ; },
        "formulasLocal": n => { workbookRange.formulasLocal = n.getObject(deserializeIntoJson) as any ; },
        "formulasR1C1": n => { workbookRange.formulasR1C1 = n.getObject(deserializeIntoJson) as any ; },
        "hidden": n => { workbookRange.hidden = n.getBooleanValue() as any ; },
        "numberFormat": n => { workbookRange.numberFormat = n.getObject(deserializeIntoJson) as any ; },
        "rowCount": n => { workbookRange.rowCount = n.getNumberValue() as any ; },
        "rowHidden": n => { workbookRange.rowHidden = n.getBooleanValue() as any ; },
        "rowIndex": n => { workbookRange.rowIndex = n.getNumberValue() as any ; },
        "sort": n => { workbookRange.sort = n.getObject(deserializeIntoWorkbookRangeSort) as any ; },
        "text": n => { workbookRange.text = n.getObject(deserializeIntoJson) as any ; },
        "values": n => { workbookRange.values = n.getObject(deserializeIntoJson) as any ; },
        "valueTypes": n => { workbookRange.valueTypes = n.getObject(deserializeIntoJson) as any ; },
        "worksheet": n => { workbookRange.worksheet = n.getObject(deserializeIntoWorkbookWorksheet) as any ; },
    }
}
