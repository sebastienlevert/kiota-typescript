import {WorkbookChartAxis} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookChartAxisFormat} from './serializeWorkbookChartAxisFormat';
import {serializeWorkbookChartAxisTitle} from './serializeWorkbookChartAxisTitle';
import {serializeWorkbookChartGridlines} from './serializeWorkbookChartGridlines';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxis(writer: SerializationWriter, workbookChartAxis: WorkbookChartAxis | undefined = {}) : void {
        serializeEntity(writer, workbookChartAxis)
            writer.writeObjectValueFromMethod("format", workbookChartAxis.format as any, serializeWorkbookChartAxisFormat);
            writer.writeObjectValueFromMethod("majorGridlines", workbookChartAxis.majorGridlines as any, serializeWorkbookChartGridlines);
            writer.writeObjectValueFromMethod("majorUnit", workbookChartAxis.majorUnit as any, serializeJson);
            writer.writeObjectValueFromMethod("maximum", workbookChartAxis.maximum as any, serializeJson);
            writer.writeObjectValueFromMethod("minimum", workbookChartAxis.minimum as any, serializeJson);
            writer.writeObjectValueFromMethod("minorGridlines", workbookChartAxis.minorGridlines as any, serializeWorkbookChartGridlines);
            writer.writeObjectValueFromMethod("minorUnit", workbookChartAxis.minorUnit as any, serializeJson);
            writer.writeObjectValueFromMethod("title", workbookChartAxis.title as any, serializeWorkbookChartAxisTitle);
}
