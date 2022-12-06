import {WorkbookTableRow} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableRow(writer: SerializationWriter, workbookTableRow: WorkbookTableRow | undefined = {}) : void {
        serializeEntity(writer, workbookTableRow)
            writer.writeNumberValue("index", workbookTableRow.index);
            writer.writeObjectValueFromMethod("values", workbookTableRow.values as any, serializeJson);
}
