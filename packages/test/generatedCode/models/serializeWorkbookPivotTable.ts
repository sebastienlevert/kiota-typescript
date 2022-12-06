import {WorkbookPivotTable} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookPivotTable(writer: SerializationWriter, workbookPivotTable: WorkbookPivotTable | undefined = {}) : void {
        serializeEntity(writer, workbookPivotTable)
            writer.writeStringValue("name", workbookPivotTable.name);
            writer.writeObjectValueFromMethod("worksheet", workbookPivotTable.worksheet as any, serializeWorkbookWorksheet);
}
