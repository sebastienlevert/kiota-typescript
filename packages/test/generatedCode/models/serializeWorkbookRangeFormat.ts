import {WorkbookRangeFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookFormatProtection} from './serializeWorkbookFormatProtection';
import {serializeWorkbookRangeBorder} from './serializeWorkbookRangeBorder';
import {serializeWorkbookRangeFill} from './serializeWorkbookRangeFill';
import {serializeWorkbookRangeFont} from './serializeWorkbookRangeFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookRangeFormat(writer: SerializationWriter, workbookRangeFormat: WorkbookRangeFormat | undefined = {}) : void {
        serializeEntity(writer, workbookRangeFormat)
            writer.writeCollectionOfObjectValuesFromMethod("borders", workbookRangeFormat.borders as any, serializeWorkbookRangeBorder);
            writer.writeNumberValue("columnWidth", workbookRangeFormat.columnWidth);
            writer.writeObjectValueFromMethod("fill", workbookRangeFormat.fill as any, serializeWorkbookRangeFill);
            writer.writeObjectValueFromMethod("font", workbookRangeFormat.font as any, serializeWorkbookRangeFont);
            writer.writeStringValue("horizontalAlignment", workbookRangeFormat.horizontalAlignment);
            writer.writeObjectValueFromMethod("protection", workbookRangeFormat.protection as any, serializeWorkbookFormatProtection);
            writer.writeNumberValue("rowHeight", workbookRangeFormat.rowHeight);
            writer.writeStringValue("verticalAlignment", workbookRangeFormat.verticalAlignment);
            writer.writeBooleanValue("wrapText", workbookRangeFormat.wrapText);
}
