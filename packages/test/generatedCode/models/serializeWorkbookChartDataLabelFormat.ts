import {WorkbookChartDataLabelFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartDataLabelFormat(writer: SerializationWriter, workbookChartDataLabelFormat: WorkbookChartDataLabelFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartDataLabelFormat)
            writer.writeObjectValueFromMethod("fill", workbookChartDataLabelFormat.fill as any, serializeWorkbookChartFill);
            writer.writeObjectValueFromMethod("font", workbookChartDataLabelFormat.font as any, serializeWorkbookChartFont);
}
