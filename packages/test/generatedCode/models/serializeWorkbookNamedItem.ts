import {WorkbookNamedItem} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeWorkbookWorksheet} from './serializeWorkbookWorksheet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookNamedItem(writer: SerializationWriter, workbookNamedItem: WorkbookNamedItem | undefined = {}) : void {
        serializeEntity(writer, workbookNamedItem)
            writer.writeStringValue("comment", workbookNamedItem.comment);
            writer.writeStringValue("name", workbookNamedItem.name);
            writer.writeStringValue("scope", workbookNamedItem.scope);
            writer.writeStringValue("type", workbookNamedItem.type);
            writer.writeObjectValueFromMethod("value", workbookNamedItem.value as any, serializeJson);
            writer.writeBooleanValue("visible", workbookNamedItem.visible);
            writer.writeObjectValueFromMethod("worksheet", workbookNamedItem.worksheet as any, serializeWorkbookWorksheet);
}
