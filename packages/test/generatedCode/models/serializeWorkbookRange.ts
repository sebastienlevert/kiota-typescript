import {WorkbookRange} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookRangeFormat} from './serializeWorkbookRangeFormat';
import {serializeWorkbookRangeSort} from './serializeWorkbookRangeSort';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRange(writer: SerializationWriter, workbookRange: WorkbookRange | undefined = {}) : void {
        serializeEntity(writer, workbookRange)
            writer.writeStringValue("address", workbookRange.address);
            writer.writeStringValue("addressLocal", workbookRange.addressLocal);
            writer.writeNumberValue("cellCount", workbookRange.cellCount);
            writer.writeNumberValue("columnCount", workbookRange.columnCount);
            writer.writeBooleanValue("columnHidden", workbookRange.columnHidden);
            writer.writeNumberValue("columnIndex", workbookRange.columnIndex);
            writer.writeObjectValueFromMethod("format", workbookRange.format as any, serializeWorkbookRangeFormat);
            writer.writeObjectValueFromMethod("formulas", workbookRange.formulas as any, serializeJson);
            writer.writeObjectValueFromMethod("formulasLocal", workbookRange.formulasLocal as any, serializeJson);
            writer.writeObjectValueFromMethod("formulasR1C1", workbookRange.formulasR1C1 as any, serializeJson);
            writer.writeBooleanValue("hidden", workbookRange.hidden);
            writer.writeObjectValueFromMethod("numberFormat", workbookRange.numberFormat as any, serializeJson);
            writer.writeNumberValue("rowCount", workbookRange.rowCount);
            writer.writeBooleanValue("rowHidden", workbookRange.rowHidden);
            writer.writeNumberValue("rowIndex", workbookRange.rowIndex);
            writer.writeObjectValueFromMethod("sort", workbookRange.sort as any, serializeWorkbookRangeSort);
            writer.writeObjectValueFromMethod("text", workbookRange.text as any, serializeJson);
            writer.writeObjectValueFromMethod("values", workbookRange.values as any, serializeJson);
            writer.writeObjectValueFromMethod("valueTypes", workbookRange.valueTypes as any, serializeJson);
            writer.writeObjectValueFromMethod("worksheet", workbookRange.worksheet as any, serializeWorkbookWorksheet);
}
