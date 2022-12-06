import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookChart} from './deserializeIntoWorkbookChart';
import {deserializeIntoWorkbookNamedItem} from './deserializeIntoWorkbookNamedItem';
import {deserializeIntoWorkbookPivotTable} from './deserializeIntoWorkbookPivotTable';
import {deserializeIntoWorkbookTable} from './deserializeIntoWorkbookTable';
import {deserializeIntoWorkbookWorksheetProtection} from './deserializeIntoWorkbookWorksheetProtection';
import {WorkbookWorksheet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookWorksheet(workbookWorksheet: WorkbookWorksheet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookWorksheet),
        "charts": n => { workbookWorksheet.charts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookChart) as any ; },
        "name": n => { workbookWorksheet.name = n.getStringValue() as any ; },
        "names": n => { workbookWorksheet.names = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookNamedItem) as any ; },
        "pivotTables": n => { workbookWorksheet.pivotTables = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookPivotTable) as any ; },
        "position": n => { workbookWorksheet.position = n.getNumberValue() as any ; },
        "protection": n => { workbookWorksheet.protection = n.getObject(deserializeIntoWorkbookWorksheetProtection) as any ; },
        "tables": n => { workbookWorksheet.tables = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookTable) as any ; },
        "visibility": n => { workbookWorksheet.visibility = n.getStringValue() as any ; },
    }
}
