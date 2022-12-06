import {WorkbookTableColumn} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookFilter} from './serializeWorkbookFilter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookTableColumn(writer: SerializationWriter, workbookTableColumn: WorkbookTableColumn | undefined = {}) : void {
        serializeEntity(writer, workbookTableColumn)
            writer.writeObjectValueFromMethod("filter", workbookTableColumn.filter as any, serializeWorkbookFilter);
            writer.writeNumberValue("index", workbookTableColumn.index);
            writer.writeStringValue("name", workbookTableColumn.name);
            writer.writeObjectValueFromMethod("values", workbookTableColumn.values as any, serializeJson);
}
