import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookWorksheet} from './deserializeIntoWorkbookWorksheet';
import {WorkbookPivotTable} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookPivotTable(workbookPivotTable: WorkbookPivotTable | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookPivotTable),
        "name": n => { workbookPivotTable.name = n.getStringValue() as any ; },
        "worksheet": n => { workbookPivotTable.worksheet = n.getObject(deserializeIntoWorkbookWorksheet) as any ; },
    }
}
