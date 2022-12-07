import {WorkbookChartGridlinesFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartLineFormat} from './serializeWorkbookChartLineFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartGridlinesFormat(writer: SerializationWriter, workbookChartGridlinesFormat: WorkbookChartGridlinesFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartGridlinesFormat)
            writer.writeObjectValueFromMethod("line", workbookChartGridlinesFormat.line as any, serializeWorkbookChartLineFormat);
}
