import {WorkbookChartSeriesFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeriesFormat(writer: SerializationWriter, workbookChartSeriesFormat: WorkbookChartSeriesFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartSeriesFormat)
            writer.writeObjectValueFromMethod("fill", workbookChartSeriesFormat.fill as any, serializeWorkbookChartFill);
            writer.writeObjectValueFromMethod("line", workbookChartSeriesFormat.line as any, serializeWorkbookChartLineFormat);
}
