import {WorkbookChartTitleFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartTitleFormat(writer: SerializationWriter, workbookChartTitleFormat: WorkbookChartTitleFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartTitleFormat)
            writer.writeObjectValueFromMethod("fill", workbookChartTitleFormat.fill as any, serializeWorkbookChartFill);
            writer.writeObjectValueFromMethod("font", workbookChartTitleFormat.font as any, serializeWorkbookChartFont);
}
