import {WorkbookChart} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartAreaFormat} from './serializeWorkbookChartAreaFormat';
import {serializeWorkbookChartAxes} from './serializeWorkbookChartAxes';
import {serializeWorkbookChartDataLabels} from './serializeWorkbookChartDataLabels';
import {serializeWorkbookChartLegend} from './serializeWorkbookChartLegend';
import {serializeWorkbookChartSeries} from './serializeWorkbookChartSeries';
import {serializeWorkbookChartTitle} from './serializeWorkbookChartTitle';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChart(writer: SerializationWriter, workbookChart: WorkbookChart | undefined = {}) : void {
        serializeEntity(writer, workbookChart)
            writer.writeObjectValueFromMethod("axes", workbookChart.axes as any, serializeWorkbookChartAxes);
            writer.writeObjectValueFromMethod("dataLabels", workbookChart.dataLabels as any, serializeWorkbookChartDataLabels);
            writer.writeObjectValueFromMethod("format", workbookChart.format as any, serializeWorkbookChartAreaFormat);
            writer.writeNumberValue("height", workbookChart.height);
            writer.writeNumberValue("left", workbookChart.left);
            writer.writeObjectValueFromMethod("legend", workbookChart.legend as any, serializeWorkbookChartLegend);
            writer.writeStringValue("name", workbookChart.name);
            writer.writeCollectionOfObjectValuesFromMethod("series", workbookChart.series as any, serializeWorkbookChartSeries);
            writer.writeObjectValueFromMethod("title", workbookChart.title as any, serializeWorkbookChartTitle);
            writer.writeNumberValue("top", workbookChart.top);
            writer.writeNumberValue("width", workbookChart.width);
            writer.writeObjectValueFromMethod("worksheet", workbookChart.worksheet as any, serializeWorkbookWorksheet);
}
