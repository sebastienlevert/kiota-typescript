import {WorkbookChartLegendFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLegendFormat(writer: SerializationWriter, workbookChartLegendFormat: WorkbookChartLegendFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartLegendFormat)
            writer.writeObjectValueFromMethod("fill", workbookChartLegendFormat.fill as any, serializeWorkbookChartFill);
            writer.writeObjectValueFromMethod("font", workbookChartLegendFormat.font as any, serializeWorkbookChartFont);
}
