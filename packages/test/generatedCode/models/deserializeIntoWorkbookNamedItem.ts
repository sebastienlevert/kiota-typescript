import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {deserializeIntoWorkbookWorksheet} from './deserializeIntoWorkbookWorksheet';
import {WorkbookNamedItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookNamedItem(workbookNamedItem: WorkbookNamedItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookNamedItem),
        "comment": n => { workbookNamedItem.comment = n.getStringValue() as any ; },
        "name": n => { workbookNamedItem.name = n.getStringValue() as any ; },
        "scope": n => { workbookNamedItem.scope = n.getStringValue() as any ; },
        "type": n => { workbookNamedItem.type = n.getStringValue() as any ; },
        "value": n => { workbookNamedItem.value = n.getObject(deserializeIntoJson) as any ; },
        "visible": n => { workbookNamedItem.visible = n.getBooleanValue() as any ; },
        "worksheet": n => { workbookNamedItem.worksheet = n.getObject(deserializeIntoWorkbookWorksheet) as any ; },
    }
}
