import {WorkbookChartAxisTitle} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartAxisTitleFormat} from './serializeWorkbookChartAxisTitleFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxisTitle(writer: SerializationWriter, workbookChartAxisTitle: WorkbookChartAxisTitle | undefined = {}) : void {
        serializeEntity(writer, workbookChartAxisTitle)
            writer.writeObjectValueFromMethod("format", workbookChartAxisTitle.format as any, serializeWorkbookChartAxisTitleFormat);
            writer.writeStringValue("text", workbookChartAxisTitle.text);
            writer.writeBooleanValue("visible", workbookChartAxisTitle.visible);
}
