import {WorkbookChartAreaFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAreaFormat(writer: SerializationWriter, workbookChartAreaFormat: WorkbookChartAreaFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartAreaFormat)
            writer.writeObjectValueFromMethod("fill", workbookChartAreaFormat.fill as any, serializeWorkbookChartFill);
            writer.writeObjectValueFromMethod("font", workbookChartAreaFormat.font as any, serializeWorkbookChartFont);
}
