import {WorkbookChartAxisTitleFormat} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeWorkbookChartFont} from './serializeWorkbookChartFont';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartAxisTitleFormat(writer: SerializationWriter, workbookChartAxisTitleFormat: WorkbookChartAxisTitleFormat | undefined = {}) : void {
        serializeEntity(writer, workbookChartAxisTitleFormat)
            writer.writeObjectValueFromMethod("font", workbookChartAxisTitleFormat.font as any, serializeWorkbookChartFont);
}
