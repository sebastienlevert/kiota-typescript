import {WorkbookChartAxisFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxisFormat(writer: SerializationWriter, workbookChartAxisFormat: WorkbookChartAxisFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartAxisFormat)
            writer.writeObjectValueFromMethod("font", workbookChartAxisFormat.font as any, serializeWorkbookChartFont);
            writer.writeObjectValueFromMethod("line", workbookChartAxisFormat.line as any, serializeWorkbookChartLineFormat);
}
