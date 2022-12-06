import {WorkbookWorksheet} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChart} from './serializeWorkbookChart';
import {serializeWorkbookNamedItem} from './serializeWorkbookNamedItem';
import {serializeWorkbookPivotTable} from './serializeWorkbookPivotTable';
import {serializeWorkbookTable} from './serializeWorkbookTable';
import {serializeWorkbookWorksheetProtection} from './serializeWorkbookWorksheetProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookWorksheet(writer: SerializationWriter, workbookWorksheet: WorkbookWorksheet | undefined = {}) : void {
        serializeEntity(writer, workbookWorksheet)
            writer.writeCollectionOfObjectValuesFromMethod("charts", workbookWorksheet.charts as any, serializeWorkbookChart);
            writer.writeStringValue("name", workbookWorksheet.name);
            writer.writeCollectionOfObjectValuesFromMethod("names", workbookWorksheet.names as any, serializeWorkbookNamedItem);
            writer.writeCollectionOfObjectValuesFromMethod("pivotTables", workbookWorksheet.pivotTables as any, serializeWorkbookPivotTable);
            writer.writeNumberValue("position", workbookWorksheet.position);
            writer.writeObjectValueFromMethod("protection", workbookWorksheet.protection as any, serializeWorkbookWorksheetProtection);
            writer.writeCollectionOfObjectValuesFromMethod("tables", workbookWorksheet.tables as any, serializeWorkbookTable);
            writer.writeStringValue("visibility", workbookWorksheet.visibility);
}
