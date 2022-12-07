import {WorkbookChartDataLabels} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartDataLabelFormat} from './serializeWorkbookChartDataLabelFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartDataLabels(writer: SerializationWriter, workbookChartDataLabels: WorkbookChartDataLabels | undefined = {}) : void {
        serializeEntity(writer, workbookChartDataLabels)
            writer.writeObjectValueFromMethod("format", workbookChartDataLabels.format as any, serializeWorkbookChartDataLabelFormat);
            writer.writeStringValue("position", workbookChartDataLabels.position);
            writer.writeStringValue("separator", workbookChartDataLabels.separator);
            writer.writeBooleanValue("showBubbleSize", workbookChartDataLabels.showBubbleSize);
            writer.writeBooleanValue("showCategoryName", workbookChartDataLabels.showCategoryName);
            writer.writeBooleanValue("showLegendKey", workbookChartDataLabels.showLegendKey);
            writer.writeBooleanValue("showPercentage", workbookChartDataLabels.showPercentage);
            writer.writeBooleanValue("showSeriesName", workbookChartDataLabels.showSeriesName);
            writer.writeBooleanValue("showValue", workbookChartDataLabels.showValue);
}
