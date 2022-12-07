import {deserializeIntoWorkbookIcon} from './deserializeIntoWorkbookIcon';
import {WorkbookSortField} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookSortField(workbookSortField: WorkbookSortField | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ascending": n => { workbookSortField.ascending = n.getBooleanValue() as any ; },
        "color": n => { workbookSortField.color = n.getStringValue() as any ; },
        "dataOption": n => { workbookSortField.dataOption = n.getStringValue() as any ; },
        "icon": n => { workbookSortField.icon = n.getObject(deserializeIntoWorkbookIcon) as any ; },
        "key": n => { workbookSortField.key = n.getNumberValue() as any ; },
        "sortOn": n => { workbookSortField.sortOn = n.getStringValue() as any ; },
    }
}
