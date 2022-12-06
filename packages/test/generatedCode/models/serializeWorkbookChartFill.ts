import {WorkbookChartFill} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookChartFill(writer: SerializationWriter, workbookChartFill: WorkbookChartFill | undefined = {}) : void {
        serializeEntity(writer, workbookChartFill)
}
