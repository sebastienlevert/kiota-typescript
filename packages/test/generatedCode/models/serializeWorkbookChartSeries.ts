import {WorkbookChartSeries} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartPoint} from './serializeWorkbookChartPoint';
import {serializeWorkbookChartSeriesFormat} from './serializeWorkbookChartSeriesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartSeries(writer: SerializationWriter, workbookChartSeries: WorkbookChartSeries | undefined = {}) : void {
        serializeEntity(writer, workbookChartSeries)
            writer.writeObjectValueFromMethod("format", workbookChartSeries.format as any, serializeWorkbookChartSeriesFormat);
            writer.writeStringValue("name", workbookChartSeries.name);
            writer.writeCollectionOfObjectValuesFromMethod("points", workbookChartSeries.points as any, serializeWorkbookChartPoint);
}
