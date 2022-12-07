import {WorkbookChartPoint} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookChartPointFormat} from './serializeWorkbookChartPointFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartPoint(writer: SerializationWriter, workbookChartPoint: WorkbookChartPoint | undefined = {}) : void {
        serializeEntity(writer, workbookChartPoint)
            writer.writeObjectValueFromMethod("format", workbookChartPoint.format as any, serializeWorkbookChartPointFormat);
            writer.writeObjectValueFromMethod("value", workbookChartPoint.value as any, serializeJson);
}
