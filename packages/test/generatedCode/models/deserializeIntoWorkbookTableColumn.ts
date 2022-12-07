import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoJson} from './deserializeIntoJson';
import {deserializeIntoWorkbookFilter} from './deserializeIntoWorkbookFilter';
import {WorkbookTableColumn} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableColumn(workbookTableColumn: WorkbookTableColumn | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTableColumn),
        "filter": n => { workbookTableColumn.filter = n.getObject(deserializeIntoWorkbookFilter) as any ; },
        "index": n => { workbookTableColumn.index = n.getNumberValue() as any ; },
        "name": n => { workbookTableColumn.name = n.getStringValue() as any ; },
        "values": n => { workbookTableColumn.values = n.getObject(deserializeIntoJson) as any ; },
    }
}
