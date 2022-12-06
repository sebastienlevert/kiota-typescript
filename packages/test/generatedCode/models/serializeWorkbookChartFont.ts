import {WorkbookChartFont} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartFont(writer: SerializationWriter, workbookChartFont: WorkbookChartFont | undefined = {}) : void {
        serializeEntity(writer, workbookChartFont)
            writer.writeBooleanValue("bold", workbookChartFont.bold);
            writer.writeStringValue("color", workbookChartFont.color);
            writer.writeBooleanValue("italic", workbookChartFont.italic);
            writer.writeStringValue("name", workbookChartFont.name);
            writer.writeNumberValue("size", workbookChartFont.size);
            writer.writeStringValue("underline", workbookChartFont.underline);
}
