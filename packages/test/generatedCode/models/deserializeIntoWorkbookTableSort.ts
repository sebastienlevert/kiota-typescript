import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoWorkbookSortField} from './deserializeIntoWorkbookSortField';
import {WorkbookTableSort} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookTableSort(workbookTableSort: WorkbookTableSort | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookTableSort),
        "fields": n => { workbookTableSort.fields = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkbookSortField) as any ; },
        "matchCase": n => { workbookTableSort.matchCase = n.getBooleanValue() as any ; },
        "method": n => { workbookTableSort.method = n.getStringValue() as any ; },
    }
}
