import {WorkbookChartAxes} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartAxis} from './serializeWorkbookChartAxis';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxes(writer: SerializationWriter, workbookChartAxes: WorkbookChartAxes | undefined = {}) : void {
        serializeEntity(writer, workbookChartAxes)
            writer.writeObjectValueFromMethod("categoryAxis", workbookChartAxes.categoryAxis as any, serializeWorkbookChartAxis);
            writer.writeObjectValueFromMethod("seriesAxis", workbookChartAxes.seriesAxis as any, serializeWorkbookChartAxis);
            writer.writeObjectValueFromMethod("valueAxis", workbookChartAxes.valueAxis as any, serializeWorkbookChartAxis);
}
