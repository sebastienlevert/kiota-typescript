import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {WorkbookTableRow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableRow(workbookTableRow: WorkbookTableRow | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTableRow),
        "index": n => { workbookTableRow.index = n.getNumberValue() as any ; },
        "values": n => { workbookTableRow.values = n.getObject(deserializeIntoJson) as any ; },
    }
}
