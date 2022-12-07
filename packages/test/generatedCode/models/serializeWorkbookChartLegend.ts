import {WorkbookChartLegend} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartLegendFormat} from './serializeWorkbookChartLegendFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLegend(writer: SerializationWriter, workbookChartLegend: WorkbookChartLegend | undefined = {}) : void {
        serializeEntity(writer, workbookChartLegend)
            writer.writeObjectValueFromMethod("format", workbookChartLegend.format as any, serializeWorkbookChartLegendFormat);
            writer.writeBooleanValue("overlay", workbookChartLegend.overlay);
            writer.writeStringValue("position", workbookChartLegend.position);
            writer.writeBooleanValue("visible", workbookChartLegend.visible);
}
