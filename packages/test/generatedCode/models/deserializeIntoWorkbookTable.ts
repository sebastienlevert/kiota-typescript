import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookTableColumn} from './deserializeIntoWorkbookTableColumn';
import {deserializeIntoWorkbookTableRow} from './deserializeIntoWorkbookTableRow';
import {deserializeIntoWorkbookTableSort} from './deserializeIntoWorkbookTableSort';
import {deserializeIntoWorkbookWorksheet} from './deserializeIntoWorkbookWorksheet';
import {WorkbookTable} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTable(workbookTable: WorkbookTable | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTable),
        "columns": n => { workbookTable.columns = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookTableColumn) as any ; },
        "highlightFirstColumn": n => { workbookTable.highlightFirstColumn = n.getBooleanValue() as any ; },
        "highlightLastColumn": n => { workbookTable.highlightLastColumn = n.getBooleanValue() as any ; },
        "legacyId": n => { workbookTable.legacyId = n.getStringValue() as any ; },
        "name": n => { workbookTable.name = n.getStringValue() as any ; },
        "rows": n => { workbookTable.rows = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookTableRow) as any ; },
        "showBandedColumns": n => { workbookTable.showBandedColumns = n.getBooleanValue() as any ; },
        "showBandedRows": n => { workbookTable.showBandedRows = n.getBooleanValue() as any ; },
        "showFilterButton": n => { workbookTable.showFilterButton = n.getBooleanValue() as any ; },
        "showHeaders": n => { workbookTable.showHeaders = n.getBooleanValue() as any ; },
        "showTotals": n => { workbookTable.showTotals = n.getBooleanValue() as any ; },
        "sort": n => { workbookTable.sort = n.getObject(deserializeIntoWorkbookTableSort) as any ; },
        "style": n => { workbookTable.style = n.getStringValue() as any ; },
        "worksheet": n => { workbookTable.worksheet = n.getObject(deserializeIntoWorkbookWorksheet) as any ; },
    }
}
