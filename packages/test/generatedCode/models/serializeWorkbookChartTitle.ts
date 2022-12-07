import {WorkbookChartTitle} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartTitleFormat} from './serializeWorkbookChartTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartTitle(writer: SerializationWriter, workbookChartTitle: WorkbookChartTitle | undefined = {}) : void {
        serializeEntity(writer, workbookChartTitle)
            writer.writeObjectValueFromMethod("format", workbookChartTitle.format as any, serializeWorkbookChartTitleFormat);
            writer.writeBooleanValue("overlay", workbookChartTitle.overlay);
            writer.writeStringValue("text", workbookChartTitle.text);
            writer.writeBooleanValue("visible", workbookChartTitle.visible);
}
