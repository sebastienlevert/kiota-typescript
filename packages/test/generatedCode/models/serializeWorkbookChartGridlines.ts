import {WorkbookChartGridlines} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartGridlinesFormat} from './serializeWorkbookChartGridlinesFormat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartGridlines(writer: SerializationWriter, workbookChartGridlines: WorkbookChartGridlines | undefined = {}) : void {
        serializeEntity(writer, workbookChartGridlines)
            writer.writeObjectValueFromMethod("format", workbookChartGridlines.format as any, serializeWorkbookChartGridlinesFormat);
            writer.writeBooleanValue("visible", workbookChartGridlines.visible);
}
