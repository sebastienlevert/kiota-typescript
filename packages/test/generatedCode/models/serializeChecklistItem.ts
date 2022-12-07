import {ChecklistItem} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChecklistItem(writer: SerializationWriter, checklistItem: ChecklistItem | undefined = {}) : void {
        serializeEntity(writer, checklistItem)
            writer.writeDateValue("checkedDateTime", checklistItem.checkedDateTime);
            writer.writeDateValue("createdDateTime", checklistItem.createdDateTime);
            writer.writeStringValue("displayName", checklistItem.displayName);
            writer.writeBooleanValue("isChecked", checklistItem.isChecked);
}
