import {WorkbookChartPointFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFill} from './serializeWorkbookChartFill';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartPointFormat(writer: SerializationWriter, workbookChartPointFormat: WorkbookChartPointFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartPointFormat)
            writer.writeObjectValueFromMethod("fill", workbookChartPointFormat.fill as any, serializeWorkbookChartFill);
}
