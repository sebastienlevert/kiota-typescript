import {WorkbookRangeView} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeView(writer: SerializationWriter, workbookRangeView: WorkbookRangeView | undefined = {}) : void {
        serializeEntity(writer, workbookRangeView)
            writer.writeObjectValueFromMethod("cellAddresses", workbookRangeView.cellAddresses as any, serializeJson);
            writer.writeNumberValue("columnCount", workbookRangeView.columnCount);
            writer.writeObjectValueFromMethod("formulas", workbookRangeView.formulas as any, serializeJson);
            writer.writeObjectValueFromMethod("formulasLocal", workbookRangeView.formulasLocal as any, serializeJson);
            writer.writeObjectValueFromMethod("formulasR1C1", workbookRangeView.formulasR1C1 as any, serializeJson);
            writer.writeNumberValue("index", workbookRangeView.index);
            writer.writeObjectValueFromMethod("numberFormat", workbookRangeView.numberFormat as any, serializeJson);
            writer.writeNumberValue("rowCount", workbookRangeView.rowCount);
            writer.writeCollectionOfObjectValuesFromMethod("rows", workbookRangeView.rows as any, serializeWorkbookRangeView);
            writer.writeObjectValueFromMethod("text", workbookRangeView.text as any, serializeJson);
            writer.writeObjectValueFromMethod("values", workbookRangeView.values as any, serializeJson);
            writer.writeObjectValueFromMethod("valueTypes", workbookRangeView.valueTypes as any, serializeJson);
}
