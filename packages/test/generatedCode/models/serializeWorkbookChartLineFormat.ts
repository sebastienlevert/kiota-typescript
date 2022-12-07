import {WorkbookChartLineFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartLineFormat(writer: SerializationWriter, workbookChartLineFormat: WorkbookChartLineFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartLineFormat)
            writer.writeStringValue("color", workbookChartLineFormat.color);
}
