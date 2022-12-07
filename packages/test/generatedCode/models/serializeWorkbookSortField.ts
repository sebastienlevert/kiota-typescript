import {WorkbookSortField} from './index';
import {serializeWorkbookIcon} from './serializeWorkbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookSortField(writer: SerializationWriter, workbookSortField: WorkbookSortField | undefined = {}) : void {
            writer.writeBooleanValue("ascending", workbookSortField.ascending);
            writer.writeStringValue("color", workbookSortField.color);
            writer.writeStringValue("dataOption", workbookSortField.dataOption);
            writer.writeObjectValueFromMethod("icon", workbookSortField.icon as any, serializeWorkbookIcon);
            writer.writeNumberValue("key", workbookSortField.key);
            writer.writeStringValue("sortOn", workbookSortField.sortOn);
}
