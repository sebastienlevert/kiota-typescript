import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ChecklistItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChecklistItem(checklistItem: ChecklistItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(checklistItem),
        "checkedDateTime": n => { checklistItem.checkedDateTime = n.getDateValue() as any ; },
        "createdDateTime": n => { checklistItem.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { checklistItem.displayName = n.getStringValue() as any ; },
        "isChecked": n => { checklistItem.isChecked = n.getBooleanValue() as any ; },
    }
}
