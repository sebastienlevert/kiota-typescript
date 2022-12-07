import {WorkbookTable} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookTableColumn} from './serializeWorkbookTableColumn';
import {serializeWorkbookTableRow} from './serializeWorkbookTableRow';
import {serializeWorkbookTableSort} from './serializeWorkbookTableSort';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTable(writer: SerializationWriter, workbookTable: WorkbookTable | undefined = {}) : void {
        serializeEntity(writer, workbookTable)
            writer.writeCollectionOfObjectValuesFromMethod("columns", workbookTable.columns as any, serializeWorkbookTableColumn);
            writer.writeBooleanValue("highlightFirstColumn", workbookTable.highlightFirstColumn);
            writer.writeBooleanValue("highlightLastColumn", workbookTable.highlightLastColumn);
            writer.writeStringValue("legacyId", workbookTable.legacyId);
            writer.writeStringValue("name", workbookTable.name);
            writer.writeCollectionOfObjectValuesFromMethod("rows", workbookTable.rows as any, serializeWorkbookTableRow);
            writer.writeBooleanValue("showBandedColumns", workbookTable.showBandedColumns);
            writer.writeBooleanValue("showBandedRows", workbookTable.showBandedRows);
            writer.writeBooleanValue("showFilterButton", workbookTable.showFilterButton);
            writer.writeBooleanValue("showHeaders", workbookTable.showHeaders);
            writer.writeBooleanValue("showTotals", workbookTable.showTotals);
            writer.writeObjectValueFromMethod("sort", workbookTable.sort as any, serializeWorkbookTableSort);
            writer.writeStringValue("style", workbookTable.style);
            writer.writeObjectValueFromMethod("worksheet", workbookTable.worksheet as any, serializeWorkbookWorksheet);
}
